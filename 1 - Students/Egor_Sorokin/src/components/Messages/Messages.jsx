import './style.css'

import React from 'react'

import Message from '../Message/Message.jsx'
import ChatInput from '../ChatInput/ChatInput.jsx'
import MessagesHeader from '../MessagesHeader/MessagesHeader.jsx'

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [{sender: 'Bot', text: 'Hello'}, {sender: 'Bot', text: 'How are you?'}] }
    }

    componentDidUpdate() {
        setTimeout(() => {
            let { messages } = this.state;
            const lastSender = messages[messages.length - 1].sender
            if (lastSender != 'Bot') {
                this.addMessage('Bot', 'Hello, ' + lastSender + '! Please, wait for respond...')
            }
        }, 1000);
    }

    addMessage = (senderName, text) => {
        this.setState({ messages: [...this.state.messages, {sender: senderName, text: text}] });
    }

    render() {
        let { author } = this.props;
        let { messages } = this.state;
        let msgsRender = messages.map((msg, i) => <Message author={this.props.author} sender = { msg.sender } text = { msg.text } key = {i} />)
    
        return(
            <div className="messagesContainer col-sm-8">
                <MessagesHeader currConversationName={this.props.currConversationName} avatarAddress={this.props.avatarAddress}/>
                <div className="messagesInnerContainer">
                    { msgsRender }
                </div>
                <ChatInput author = { author } sendFunction= { this.addMessage }/>
            </div>
        )
    }
}