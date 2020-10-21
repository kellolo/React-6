import './style.css'

import React from 'react'

import Messages from '../Messages/Messages.jsx'
import MessagesBlank from '../MessagesBlank/MessagesBlank.jsx'
import ChatList from '../ChatList/ChatList.jsx'

export default class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            conversations: [
                {
                    id: 0,
                    userId: '0',
                    name: 'Bot',
                    avatar: 'https://via.placeholder.com/70',
                    lastMessage: 'Bot: How are you?',
                },
                {
                    id: 1,
                    userId: '1',
                    name: 'Bot2',
                    avatar: 'https://via.placeholder.com/70/cccc55',
                    lastMessage: 'Bot2: Hello! I am Bot2',
                },
                {
                    id: 2,
                    userId: '2',
                    name: 'Bot3',
                    avatar: 'https://via.placeholder.com/70/55cc55',
                    lastMessage: 'Bot3: Hello! I am Bot3',
                }
            ],
            contacts: [
                {
                    id: 0,
                    name: 'Bot',
                    avatar: 'https://via.placeholder.com/70',
                },
                {
                    id: 1,
                    name: 'Bot2',
                    avatar: 'https://via.placeholder.com/70/cccc55',
                },
                {
                    id: 2,
                    name: 'Bot3',
                    avatar: 'https://via.placeholder.com/70/55cc55',
                },
                {
                    id: 3,
                    name: 'Bot4',
                    avatar: 'https://via.placeholder.com/70/555555',
                },
                {
                    id: 4,
                    name: 'Bot5',
                    avatar: 'https://via.placeholder.com/70/cccccc',
                },
            ]
        }
    }

    setLastMessage = (message) => {
        let newConvState = this.state.conversations;
        newConvState[this.props.chatId].lastMessage = message.sender + ': ' + message.text;
        this.setState(
            {
                conversations: newConvState,
            })
    }

    messagesRender = (activeConv) => {
        if (this.props.chatId == '-1') {
            return (<MessagesBlank myAvatar = { this.props.me.avatar } />)
        } else {
            return (<Messages author = {this.props.me} activeId={activeConv.id} currConversationName={activeConv.name} avatarAddress={activeConv.avatar} setLastMessage = { this.setLastMessage } />)
        }
    }

    addNewConversation = (userId) => {
        let { conversations, contacts } = this.state;
        let contactToChat = contacts.find(item => item.id == userId);
        this.setState({
            conversations: [
                ...conversations, 
                {
                    id: Number(conversations.reduce((res, item) => {
                        return (Math.max(res, item.id));
                    }, 0)) + 1,
                    userId: userId.toString(),
                    name: contactToChat.name,
                    avatar: contactToChat.avatar,
                    lastMessage: 'No messages yet',
                }
            ]
        })
    }

    render() {

        let { conversations, contacts } = this.state;

        let activeConv = {
            id: -1,
            avatar: 'uDef',
            name: 'uDef',
        };

        if (this.props.chatId != '-1') {
            let active = conversations.find(item => item.id == this.props.chatId);
            activeConv = 
            {
                id: active.id,
                avatar: active.avatar,
                name: active.name
            }
        }

        return(
            <main>
                <div className="row">
                    <ChatList activeIndex = { this.props.chatId } conversationsArray = { conversations } contacts = { contacts } addChatScript = { this.addNewConversation } />
                    { this.messagesRender(activeConv) }
                    {/* <Messages author = 'Egor' activeId={activeConv.id} currConversationName={activeConv.name} avatarAddress={activeConv.avatar} /> */}
                </div>
            </main>
    )}
}