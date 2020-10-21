
import React, { Component, Fragment } from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Messages from '../Messages/Messages';
import ChatList from '../ChatList/ChatList';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: ['Alexandra', 'Michael', 'Ivan'],
            chatList: [ 
                {
                    chatName: 'Chat 1',
                    chatId: 1,
                },
                {
                    chatName: 'Chat 2',
                    chatId: 2,
                },
                {
                    chatName: 'Chat 3',
                    chatId: 3,
                },
            ],
            selectedChat: 1,
        }
    }

    selectHandler = (v) => {
        this.setState({
            selectedChat: v
        })
    }

    addChat = (chat) => {
        let chatId = +this.state.chatList.length+1
        
        this.setState({
            chatList: [...this.state.chatList, {
                chatName: chat,
                chatId: chatId,
            }]
        })
    }
    
    render() {
        return (
            <Fragment>
            <div className="Layout">
                <Header chats={this.state.chatList} selected={this.state.selectedChat}/>
                <div className="msgWrapper">
                    <ChatList 
                        contacts={this.state.contactList} 
                        chats={this.state.chatList} 
                        onSelect={this.selectHandler}
                        selected={this.state.selectedChat}
                        addChat={this.addChat}
                        />
                    <Messages 
                        />
                </div>
            </div>
        </Fragment>
        )
    }
}



