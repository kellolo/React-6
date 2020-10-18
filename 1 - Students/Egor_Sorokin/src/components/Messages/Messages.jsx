import './style.css'

import React from 'react'

import Message from '../Message/Message.jsx'
import ChatInput from '../ChatInput/ChatInput.jsx'
import MessagesHeader from '../MessagesHeader/MessagesHeader.jsx'

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            conversations: [
                {
                    id: 0,
                    name: 'Bot',
                    messages: [{sender: 'Bot', text: 'Hello'}, {sender: 'Bot', text: 'How are you?'}]
                },
                {
                    id: 1,
                    name: 'Bot2',
                    messages: [{sender: 'Bot2', text: 'Hello! I am Bot2'}]
                },
                {
                    id: 2,
                    name: 'Bot3',
                    messages: [{sender: 'Bot3', text: 'Hello! I am Bot3'}]
                },
            ],
            activeId: props.activeId,
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            let { conversations, activeId } = this.state;
            let { name, messages } = conversations[activeId];
            

            const lastSender = messages[messages.length - 1].sender
        
            if (lastSender == this.props.author) {
                this.addMessage(name, 'Hello, ' + lastSender + '! Please, wait for respond...')
            }
        }, 1000);
        
        if (this.state.activeId !== this.props.activeId) {
            this.setState({activeId: this.props.activeId});
        }
        
    }

    addMessage = (senderName, text) => {
        if (text !='') {
            let newConversState = this.state.conversations;
            newConversState[this.state.activeId] = {
                id: newConversState[this.state.activeId].id,
                name: newConversState[this.state.activeId].name,
                messages: [...newConversState[this.state.activeId].messages, {sender: senderName, text: text}]
            }
            this.setState({conversations: newConversState});
        } 
    }

    render() {
        let { author } = this.props;
        let { conversations, activeId } = this.state;
        let { messages } = conversations[activeId];

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