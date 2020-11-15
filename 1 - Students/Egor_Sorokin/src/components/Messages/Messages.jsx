import './style.css'

import React from 'react'

import Message from '../Message/Message.jsx'
import ChatInput from '../ChatInput/ChatInput.jsx'
import MessagesHeader from '../MessagesHeader/MessagesHeader.jsx'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { sendMessage } from '../../store/actions/messages.actions.js'
import { loadChat } from '../../store/actions/chat.actions.js'


class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.scrollDown();
    }

    addMessage = async (senderId, text) => {
        if (text !='') {
            await this.props.sendMessage(`/api/sendMessage/${this.props.activeId}`, senderId, text);
            this.props.loadChat(`/api/chat/${this.props.activeId}`)
        } 
    }

    scrollDown = () => {
        this.scrollPointer.scrollIntoView({behavior: 'smooth'})
    }

    render() {
        let { author,  messages, activeId, chats, users, activeChat } = this.props;
        // let messagesArray = conversations.find(item => item.id == activeId).messages;
        
        let authorUser = users.find(item => item.id == author);
        let authorName = authorUser.name
        let authorAvatar = authorUser.avatar;

        if (Object.keys(activeChat).length != 0) {

        let otherUser = users.find(item => item.id == activeChat.users.find(item => item != author))

        let msgsRender;

        if (messages.length != 0) {
            msgsRender = messages.map((msg, i) => {
                // let thisMessage = messages.find(item => item._id == msg)
                let senderName = users.find(item => item.id == msg.sender).name;
                return (
                    <Message author = { authorName } sender = { senderName } text = { msg.text } key = { i } />
                )
            }
            )
        }
        

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
        } else {
            return(<div className="messages-container col-sm-8">
                <div className="messages-inner-container">
                    <div className="scroll-pointer" ref={ item => this.scrollPointer = item }></div>
                </div>
            </div>)
        }
    }
}

const mapStateToProps = ({ messagesReducer, chatsReducer, usersReducer }) => ({
    messages: messagesReducer.messages,
    users: usersReducer.users,
    chats: chatsReducer.chats,
    activeChat: chatsReducer.activeChat,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);