import './style.css'
import React, { Component } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

class ChatsList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     chats: this.props.chats.slice(),
        //     activeChatId: this.props.activeChatId,
        // }
    }


    render() {
        return (
            <div className="chat-list">
                <header>
                    <button className="button-round button-chat button-pushed"></button>
                    <h2 className={"chat-list__header"}>Welcome to chats:</h2>
                </header>

                <ul>
                    {this.props.chatsFromRedux.map( chat =>
                        <li key = {chat.id} className={chat.id===this.props.activeChatId ? 'li-marked' : 'li-unmarked'}>
                            <Link to={`/chat/${chat.id}`}>{chat.title}</Link>
                        </li>)}
                </ul>
                <div>
                    <ChatDialog contacts={this.props.contacts} chats={this.props.chats}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({chatsReducer}) => ({
    chatsFromRedux: chatsReducer.chats
});
const mapDispatchToProps = dipatch => bindActionCreators({}, dipatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList)