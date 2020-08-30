import React, { useState, useCallback, useEffect } from 'react';
import getFetcher from '../../services/getFetch.js';
import postFetcher from '../../services/postFetch.js';

function ChatRoom() {

    const [id, setId] = useState('')
    const [guests, setGuests] = useState(0)
    const [method, setMethod] = useState('GET')
    const [result, setResult] = useState('')
    const [currentUser] = useState(localStorage.getItem('currentUser'))

    useEffect(() => {
        const url = 'api/rooms/'
        getFetcher(url).then((resp) => setGuests(resp.body.data))
    });

    const createRoom = async () => {
        const url = 'api/rooms/'
        const response = await postFetcher({}, url)
        console.log(response)
    }

    return (
        <>
            <h1>Hello {currentUser}!</h1>
            {guests.length > 0 &&
                <div>haola</div>
            }
            {guests.length == 0 &&
                <>
                    <div><h5>Current chat rooms: 0</h5></div>
                    <div>
                        <button onClick={createRoom}>New room</button>
                    </div>
                </>
            }

        </>
    )
}

export default ChatRoom;