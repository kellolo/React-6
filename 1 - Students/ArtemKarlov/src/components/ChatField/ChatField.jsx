import './style.css';
import React, { Fragment } from 'react';

import ChatInfo from '../ChatInfo/ChatInfo.jsx';
import Messages from '../Messages/Messages.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';

export default (props) => {
    const {chatName} = props;
    return (
        <Fragment>
            <section className="lyaout__chat chat">
                <ChatInfo opponentName={chatName}/>
                <Messages />
            </section>
        </Fragment>
    );
} 