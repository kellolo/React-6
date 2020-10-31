import './style.css';
import React, { Fragment } from 'react';

import ChatInfo from '../ChatInfo/ChatInfo.jsx';
import Messages from '../Messages/Messages.jsx';

export default (props) => {
    const {chatInfo} = props;
    return (
        <Fragment>
            <section className="lyaout__chat chat">
                <ChatInfo chatInfo={chatInfo}/>
                <Messages />
            </section>
        </Fragment>
    );
} 
