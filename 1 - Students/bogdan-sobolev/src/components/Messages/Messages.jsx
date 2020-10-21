import './style.css'
import React, { Component } from 'react'

import Message from 'components/Message/Message.jsx'
import ChatMenu from 'components/ChatMenu/ChatMenu'

import ChatInput from 'components/ChatInput/ChatInput.jsx'
import ChatUsersModal from 'components/ChatUsersModal/ChatUsersModal'

import {chats} from '../../helpers/chatsData'
import {users} from '../../helpers/usersData'

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: chats,
            users: users,
        }
    }

    get chatList() {
        let {chats} = this.state;
        if(chats){
            let chatList = chats.map( (chat) => (
                {
                    id: chat.id,
                    title: chat.title
                }
            ) );
            return chatList;
        }
    }

    get chat() {
        let {chats} = this.state;
        let chatId = this.props.match.params.id;
        if (chatId) {
            let chat = chats.find( chat => chat.id == chatId ) ;
            return chat;
        }
    }

    sendMessage = txt => {
        let { chats } = this.state;
        let chat = this.chat;
        chat.messages = chat.messages.concat({ sender: 'Me', text: txt });
        this.setState({
            chats: chats,
        })
    }

    componentDidUpdate() {
        // let { messages } = this.state;
        // if (messages[messages.length - 1].sender != 'Bot') {
        //     setTimeout(() => {
        //         this.setState({
        //             messages: [...messages, { sender: 'Bot', text: 'Some text here...' }],
        //         })
        //     }, 500);
        // }
    }

    render() {
        let {users} = this.state;
        return (
            <div className="d-flex messages">
                
                <div className="chat-menu-wrp">
                    <ChatMenu chatList = {this.chatList} userList={users} />
                </div>
                <div className="message-list-n-form d-flex flex-column">
                    { this.chat ? 
                        <>
                            <div className="d-flex align-items-center p-2">
                                <div className="d-flex justify-content-center w-100">{this.chat.title}</div>
                                <ChatUsersModal userList={this.chat.users}/>
                            </div>
                            <div className="message-list h-100">
                                { this.chat.messages.map((msg, i) => <Message sender = { msg.sender } text = { msg.text }  key = { i }/>) }
                            </div>
                            <ChatInput send = { this.sendMessage } />
                        </> : <div className="d-flex align-items-center justify-content-center h-100">Выберите чат</div>
                    }
                </div>
            </div>
        )
    }
}