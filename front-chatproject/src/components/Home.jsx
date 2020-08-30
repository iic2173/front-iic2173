import React, { useState, useCallback } from 'react';
import postFetcher from '../services/postFetch.js';

function Home() {

    const [username, setUsername] = useState('');

    const submitUser = useCallback(async (event) => {
        event.preventDefault()
        if (username.length > 0) {
            const body = { username: username }
            const path = `api/user/`
            await postFetcher(body, path)

            // Guardar un usuario aquí
            localStorage.setItem('currentUser', username)
            window.location = '/room'
        }
    });

    const insertUsername = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div>
            <header className="App-header">
                <h1>Welcome to The Chat Project!</h1>
                <label>
                    Insert an anonymous alias:
                    <input type='text' id='username-input' name='username-input' onChange={insertUsername} onClick={submitUser} />
                    <button onClick={submitUser}>Go chating!</button>
                </label>
            </header>
        </div>
    );
}

export default Home;