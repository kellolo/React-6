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

   
        

    componentDidUpdate(prevState) {
        let { messages } = this.state;
        if(prevState.sender !== this.state.sender){
        setTimeout( this.setState({
            messages: [...messages, { sender: 'Bot', text: "Привет" }],
        }),3000);
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