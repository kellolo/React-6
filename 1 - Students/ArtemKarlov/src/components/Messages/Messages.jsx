import './style.css';
import React from 'react';

import Message from '../Message/Message.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {sender: 'Bot', text: '...'},
                {sender: 'Me', text: 'text'},
                {sender: 'Bot', text: '...'},
                {sender: 'Me', text: 'text 2'},
            ],
        }
    }

    addMessage = msg => {
        let {messages} = this.state;
        this.setState({
            messages: [...messages, {sender: 'Me', text: msg}],
        });
    }

    render() {
        let {messages} = this.state;
        let messagesArray = messages.map((msg, index) => <Message key={index} sender={msg.sender} message={msg.text} />)

        return (    
            <div className="chat-wrapper">
                <div className="messages">
                    { messagesArray }
                </div>
                <ChatInput sendMessage = { this.addMessage } />                
            </div>
        );
    }
}