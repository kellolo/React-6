import './style.css'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {makeStyles} from "@material-ui/core/styles";

import { loadChats } from '../../store/actions/chats.actions.js'
import Typography from "@material-ui/core/Typography";
import SelectUserDialog from "../SelectUserDialog/SelectUserDialog.jsx"


class ChatsList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadChats('/api/chats/');
    }


    render() {

        let {user, chatsFromRedux, activeChatId} = this.props

        return (
            <div className="chat-list">
                <header>
                    <SelectUserDialog/>
                    <Typography variant="body1" className={'typo'}>{user.name}</Typography>
                    <Typography variant="body1" className={'typo'}>{user.email}</Typography>
                    <h2 className={"chat-list__header"}>Lets chat:</h2>
                </header>

                <ul>
                    {chatsFromRedux.map( chat =>
                        <li key = {chat.id} className={chat.id===activeChatId ? 'li-marked' : 'li-unmarked'}>
                            <Link to={`/chat/${chat.id}`}>{chat.title}</Link>
                        </li>)}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = ({chatsReducer, userReducer} ) => ({
    chatsFromRedux: chatsReducer.chats, user: userReducer
});
const mapDispatchToProps = dispatch => bindActionCreators({loadChats}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList)