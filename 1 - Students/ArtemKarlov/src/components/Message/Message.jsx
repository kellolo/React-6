import './style.css';
import React from 'react';

export default props => {
    let {sender, message} = props;

    const messageClassNames = (sender === 'Me') ?
    "chat-dialog__message chat-dialog__message_from_me": 
    "chat-dialog__message chat-dialog__message_from_opponent";
    

    return (
        <div className = { messageClassNames }>
            <p>{ message }</p>
        </div>

    );
}