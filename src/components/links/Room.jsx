import React, { useState, useEffect } from 'react';
import postFetcher from '../../services/postFetch.js';
import getFetcher from '../../services/getFetch.js';


export default function Room() {

    const [roomId, setRoomId] = useState('')
    const [messages, setMessages] = useState([])
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'))

    useEffect(() => {
        const id = window.location.pathname.split("/", 3)[2]
        const url = `api/rooms/${id}`
        setCurrentUser(localStorage.getItem('currentUser'))
        getFetcher(url).then((resp) => {
            const formatted = msgFormatter(resp.body.data)
            setMessages(formatted);
            setRoomId(id);
        })
    });

    const msgFormatter = (objectArray) => {
        let msgs = []
        objectArray.forEach((obj) => {
            let currentMsg = [obj.created_at, obj.user, obj.text]
            msgs.push(currentMsg)
        })
        return msgs
    }

    let htmlMsgs = []
    let counter = 0
    messages.forEach((msg) => {
        htmlMsgs.push(<h5 key={counter}>{msg[0]} {msg[1]}: {msg[2]}</h5>)
        counter++;
    })

    const sendMessage = async (event) => {
        const url = `api/messages/`
        const textMsg = event.target.children[0].value
        event.preventDefault()
        const body = { text: textMsg, username: currentUser, room_id: roomId }
        await postFetcher(body, url)
    }

    const backToRooms = () => {
        window.location = '/room'
    }

    return (
        <>
            <h2>hello {currentUser}!</h2>
            <div id={messages}>{htmlMsgs}</div>
            <h3>Current room: {roomId}</h3>
            <form onSubmit={sendMessage}>
                <input type="text" placeholder='Write a message...' />
                <button>Send</button>
            </form>
            <button onClick={backToRooms}>Back to rooms</button>
        </>
    )
}

