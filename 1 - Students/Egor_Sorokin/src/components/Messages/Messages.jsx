import './style.css'

import React from 'react'

import Message from '../Message/Message.jsx'
import ChatInput from '../ChatInput/ChatInput.jsx'
import MessagesHeader from '../MessagesHeader/MessagesHeader.jsx'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { sendMessage } from '../../store/actions/messages.actions'


class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    componentDidUpdate() {

        setTimeout(() => {
            let { conversations, author, users, activeId } = this.props;
            let { userId, messages } = conversations[activeId];

            const lastSender = messages[messages.length - 1].sender
            let lastSenderName;
        
            if (lastSender == author) {
                lastSenderName = users.find(item => item.id == lastSender).name;
                this.addMessage(userId, 'Hello, ' + lastSenderName + '! Please, wait for respond...')
            }
        }, 1000);

        this.scrollDown();
        
    }

    addMessage = (senderId, text) => {
        if (text !='') {
            this.props.sendMessage(this.props.activeId, senderId, text);
        } 
    }

    scrollDown = () => {
        this.scrollPointer.scrollIntoView({behavior: 'smooth'})
    }

    render() {
        let { author, conversations, activeId, chats, users } = this.props;
        let messages = conversations[activeId].messages;
        
        let authorUser = users.find(item => item.id == author);
        let authorName = authorUser.name
        let authorAvatar = authorUser.avatar;

        let msgsRender = messages.map((msg, i) => {
            let senderName = users.find(item => item.id == msg.sender).name;
            return (
                <Message author = { authorName } sender = { senderName } text = { msg.text } key = { i } />
            )
        }
        )

        return(
            <div className="messages-container col-sm-8">
                <MessagesHeader currConversationName={ chats[activeId].name } avatarAddress={ chats[activeId].avatar } myAvatar = { authorAvatar }/>
                <div className="messages-inner-container">
                    { msgsRender }
                    <div className="scroll-pointer" ref={ item => this.scrollPointer = item }></div>
                </div>
                <ChatInput author = { author } sendFunction= { this.addMessage } />
            </div>
        )
    }
}

const mapStateToProps = ({ messagesReducer, chatsReducer, usersReducer }) => ({
    conversations: messagesReducer.conversations,
    users: usersReducer.users,
    chats: chatsReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);