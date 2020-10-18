import './style.css'
import React, { Component, Fragment } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'


class ChatsList extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    chatsEl= this.props.chats.map( chat =>
        <li>
            <a href="">{chat}</a>
        </li>)

    render() {
        return (
            <div className="chat-list">
                <button className="button-round button-chat button-pushed"></button>
                <ul>
                    {this.chatsEl}
                </ul>
                <div>
                    <ChatDialog contacts={this.props.contacts} chats={this.props.chats}/>
                </div>
            </div>
        )
    }
}

export default ChatsList