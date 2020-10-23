import './style.css';
import React, { Fragment } from 'react';

import Message from '../Message/Message.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {sender: 'Bot', text: 'Wake up, Neo…'},
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

    }

    componentDidUpdate() {
        const botName = "Bot";
        const botMessage = "The Matrix has you…";
        const {messages} = this.state;
        const lastMessage = messages[messages.length-1];
        if (lastMessage.sender !== botName) {
            setTimeout(() => {
                this.addMessage(botMessage, botName);
            }, 1000);
        }        
    }

    render() {
        let {messages} = this.state;
        let messagesArray = messages.map((msg, index) => <Message key={index} sender={msg.sender} message={msg.text} />)

        return (
            <Fragment>
                <div class="chat__dialog chat-dialog">
                    { messagesArray }                    
                </div> 
                <ChatInput sendMessage = { this.addMessage } /> 
            </Fragment>
               
        );
    }
}