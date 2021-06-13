import React from 'react';
import './Chat.css';
import Avatar from "@material-ui/core/Avatar";
import {Link} from 'react-router-dom';

function Chat({name, message, profilePic, timestamp}) {
    return (
       <Link to={`/chat/${name}`}>
        <div className="chat">
            <Avatar className="chat__image" alt={name} src={profilePic}/>
            <div className="chat__details">
            <h2>{name}</h2>
            <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    );
}

export default Chat;
