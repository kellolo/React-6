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
    }

    componentDidUpdate() {
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
        let { author, conversations, messages, activeId, chats, users } = this.props;
        let messagesArray = conversations.find(item => item.id == activeId).messages;
        
        let authorUser = users.find(item => item.id == author);
        let authorName = authorUser.name
        let authorAvatar = authorUser.avatar;

        let otherUser = users.find(item => item.id == conversations.find(item => item.id == activeId).userId)

        let msgsRender = messagesArray.map((msg, i) => {
            let thisMessage = messages.find(item => item.id == msg)
            let senderName = users.find(item => item.id == thisMessage.sender).name;
            return (
                <Message author = { authorName } sender = { senderName } text = { thisMessage.text } key = { i } />
            )
        }
        )

        let activePosition = chats.findIndex(item => item.id == activeId)

        return(
            <div className="messages-container col-sm-8">
                <MessagesHeader currConversationName={ otherUser.name } avatarAddress={ otherUser.avatar } myAvatar = { authorAvatar }/>
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
    messages: messagesReducer.messages,
    users: usersReducer.users,
    chats: chatsReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);