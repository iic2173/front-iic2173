import React, { useState, useCallback, useEffect } from 'react';
import postFetcher from '../../services/postFetch.js';
import getFetcher from '../../services/getFetch.js';
import axios from 'axios';


function Room() {

    const [rooms, setRooms] = useState([])
    const [currentUser] = useState(localStorage.getItem('currentUser'))

    useEffect(async () => {
        const url = 'api/rooms/'
        const response = await getFetcher(url)
        console.log('aajaja')
        setRooms(response.data)
        console.log(response)
    });

    return (
        <>
            <div>hello world!</div>
            <h1>{currentUser}</h1>
            <h3>{rooms}</h3>
        </>
    )
}

export default ChatRoom;