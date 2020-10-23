import './style.css';

import React, { Component } from 'react';

import Message from '../Message/Message.jsx';

export default class MessageField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { messages } = this.props;
        let contentArray = messages.map((msg, index) => {
            let { sender, text } = msg;
            return <Message text = { text } sender = { sender } key = { index }/>
        });

        return (
            <div className="messageField">
                <div className="d-flex flex-column content-wrp">
                    { contentArray }
                </div>
            </div>
        )
    }
}
