import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ChatRoom from './links/ChatRooms';
import Room from './links/Room';

function Routes() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/room' exact component={ChatRoom} />
                    <Route path='/room/:id' exact component={Room} />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;