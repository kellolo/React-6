import './style.css'
import React, { Component } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Messages from '../Messages/Messages.jsx'
import ChatList from '../ChatList/ChatList.jsx'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: ['Petrovich', 'Alekseich', 'Vasilych'],
            chats: [
                {
                    title: 'Chat 1',
                    _id: 'ch_1'
                }, 
                {
                    title: 'Chat 2',
                    _id: 'ch_2'
                }
            ]
        }
    }
    
    componentDidMount() {
        // this.props.setChats(this.state.chats);
    }
    
    componentDidUpdate() {
        
    }

    render() {
        let chat = this.state.chats.find(el => el._id == this.props.chatId);
        let chatName = chat ? chat.title : 'Welcome';
        
        return (
                <StylesProvider>
                    <div className=" d-flex flex-column align-items-center m-auto wrap">
                    <h1 className="title"> { this.props.chatName ? this.props.chatName : 'Welcome' } </h1>
                        <div className="wrapper w-100 d-flex ">
                            <ChatList contacts = { this.state.contacts } chats = { this.state.chats }/>
                            <Messages />
                        </div>
                    </div>
                    
                </StylesProvider>
        )
    }
}