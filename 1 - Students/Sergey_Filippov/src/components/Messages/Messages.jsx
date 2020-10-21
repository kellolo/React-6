import './style.css'
import React, { Component } from 'react'

import Message from '../Message/Message.jsx'

import ChatInput from '../ChatInput/ChatInput.jsx'

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {sender:"Добро" ,text:"пожаловать"}
            ]
        }
    }

    sendMessage = txt => {
        let { messages } = this.state;
        this.setState({
            messages: [...messages, { sender: 'Me', text: txt }],
        })
    }

   
        

    componentDidUpdate() {
        let { messages } = this.state;
        if (messages.length % 2 === 0) {  
            setTimeout(() =>
            this.setState(
                { messages: [ ...messages, {sender: "bot" , text: 'Не приставай ко мне, я робот!'} ] }),
            1000);
            }
        }

    render() {
        let { messages } = this.state;
        let messagesArray = messages.map((msg, i) => <Message  sender = { msg.sender } text = { msg.text }  key = { i }/>);

        return (
            <div className="d-flex flex-column align-items-center">
                <div className="msg-wrap">
                    { messagesArray }
                </div>
                <ChatInput send = { this.sendMessage } />
            </div>
        )
    }
}