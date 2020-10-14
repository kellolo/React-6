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

    addMessage = (message, sender = 'Me') => {
        let {messages} = this.state;
        this.setState({
            messages: [...messages, {sender: sender, text: message}],
        });
    }

    componentDidMount() {
        console.log('MOUNTED');        
    }

    componentDidUpdate() {
        const botName = "Bot";
        const botMessage = "I'm Bot";
        const {messages} = this.state;
        const lastMessage = messages[messages.length-1];
        if (lastMessage.sender !== botName) {
            setTimeout(() => {
                this.addMessage(botMessage, botName);
            }, 1000);
        }        
        console.log('UPDATED');
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