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
        
            if (lastSender == this.props.author.name) {
                this.addMessage(name, 'Hello, ' + lastSender + '! Please, wait for respond...')
            }
        }, 1000);
        
        this.setState((state, props) => {
            if (state.activeId !== props.activeId) {
                return({activeId: this.props.activeId});
            }
        })

        this.scrollDown();
        
    }

    addMessage = (senderName, text) => {
        if (typeof this.state.conversations[this.state.activeId] == 'undefined') {
            this.setState({conversations: [
                ...this.state.conversations,
                {
                    id: this.state.activeId,
                    name: this.props.currConversationName,
                    messages: [],
                }
            ]});
        }

        if (text !='') {
            this.setState((state, props) => {
                let newConversState = state.conversations;
                newConversState[state.activeId] = {
                id: newConversState[state.activeId].id,
                name: newConversState[state.activeId].name,
                messages: [...newConversState[state.activeId].messages, {sender: senderName, text: text}]
            }

            props.setLastMessage(newConversState[state.activeId].messages[newConversState[state.activeId].messages.length - 1]);
            return(newConversState);
            })
            
            
        } 
    }

    scrollDown = () => {
        this.scrollPointer.scrollIntoView({behavior: 'smooth'})
    }

    render() {
        let { author } = this.props;
        let { conversations, activeId } = this.state;
        let messages;
        if (typeof conversations[activeId] == 'undefined') {
            messages = [];
        } else {
            messages = conversations[activeId].messages;
        }
        

        let msgsRender = messages.map((msg, i) => <Message author={this.props.author.name} sender = { msg.sender } text = { msg.text } key = {i} />)
    
        return(
            <div className="messages-container col-sm-8">
                <MessagesHeader currConversationName={this.props.currConversationName} avatarAddress={this.props.avatarAddress} myAvatar = { author.avatar }/>
                <div className="messages-inner-container">
                    { msgsRender }
                    <div className="scroll-pointer" ref={ item => this.scrollPointer = item }></div>
                </div>
                <ChatInput author = { author.name } sendFunction= { this.addMessage } />
            </div>
        )
    }
}