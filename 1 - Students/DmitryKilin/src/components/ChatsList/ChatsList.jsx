import './style.css'
import React, { Component } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

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
                        <Avatar alt="X" src="./src/img/tarantino.jpg"></Avatar>
                    <h2 className={"chat-list__header"}>Lets chat:</h2>
                </header>

                <ul>
                    {this.props.chatsFromRedux.map( chat =>
                        <li key = {chat.id} className={chat.id===this.props.activeChatId ? 'li-marked' : 'li-unmarked'}>
                            <Link to={`/chat/${chat.id}`} style={{color: '#16B5E8'}}>{chat.title}</Link>
                        </li>)}
                </ul>
                <div>
                    <ChatDialog/>
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