import React, { useState, useCallback, useEffect } from 'react';
import getFetcher from '../../services/getFetch.js';
import postFetcher from '../../services/postFetch.js';

function ChatRoom() {

    const [guests, setGuests] = useState(0)
    const [currentUser] = useState(localStorage.getItem('currentUser'))

    useEffect(() => {
        const url = 'api/rooms/'
        getFetcher(url).then((resp) => setGuests(resp.body.data))
    });

    const createRoom = async () => {
        const url = 'api/rooms/'
        const response = await postFetcher({}, url)
        const roomId = response.body.data.room_id
        window.location = `room/${roomId}`
    }

    const enterRoom = (event) => {
        const url = `room/${event.target.id}`
        window.location = url
    }

    const backToHome = () => {
        window.location = '/'
    }

    let currentRooms = []
    for (let i = 0; i < guests.length; i++) {
        currentRooms.push(<button key={i + 1} id={i + 1} onClick={enterRoom}>Enter to room {i + 1}</button>)
    }

    return (
        <>
            <h1>Hello {currentUser}!</h1>
            {guests.length > 0 &&
                <div>{currentRooms}</div>
            }
            <div><h5>Current chat rooms: {guests.length}</h5></div>
            <div>
                <button onClick={createRoom}>New room</button>
            </div>
            <button onClick={backToHome}>Back to home</button>
        </>

    )
}

export default ChatRoom;