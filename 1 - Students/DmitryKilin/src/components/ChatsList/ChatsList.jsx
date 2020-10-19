import './style.css'
import React, { Component } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'
import {Link} from 'react-router-dom';


class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: this.props.chats.slice(),
            activeChatId: this.props.activeChatId,
        }
    }


    render() {
        return (
            <div className="chat-list">
                <header>
                    <button className="button-round button-chat button-pushed"></button>
                    <h2 className={"chat-list__header"}>Welcome to chats:</h2>
                </header>

                <ul>
                    {this.props.chats.map( chat =>
                        <li key = {chat._id} className={chat._id===this.state.activeChatId ? 'li-marked' : 'li-unmarked'}>
                            <Link to={`/chat/${chat._id}`}>{chat.title}</Link>
                        </li>)}
                </ul>
                <div>
                    <ChatDialog contacts={this.props.contacts} chats={this.props.chats}/>
                </div>
            </div>
        )
    }
}

export default ChatsList