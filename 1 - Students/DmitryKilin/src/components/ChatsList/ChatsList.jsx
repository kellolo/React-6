import './style.css'
import paths from 'path'
import React, { Component } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'
import UserInfo from "../UserInfo/UserInfo.jsx";
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {makeStyles} from "@material-ui/core/styles";
import userReducer from "../../store/reducers/user.reduser";

class ChatsList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = makeStyles({
            'link': {
                color: '#16B5E8'
            }
        })

        let avatarPath = paths.join('','src','img', this.props.user.avatar);

        return (
            <div className="chat-list">
                <header>
                    {/*<Avatar alt="X" src={avatarPath}/>*/}
                    <UserInfo/>
                    <h2 className={"chat-list__header"}>Lets chat:</h2>
                </header>

                <ul>
                    {this.props.chatsFromRedux.map( chat =>
                        <li key = {chat.id} className={chat.id===this.props.activeChatId ? 'li-marked' : 'li-unmarked'}>
                            <Link to={`/chat/${chat.id}`} className={classes.link}>{chat.title}</Link>
                        </li>)}
                </ul>
                <div>
                    <ChatDialog/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({chatsReducer, userReducer} ) => ({
    chatsFromRedux: chatsReducer.chats, user: userReducer
});
const mapDispatchToProps = dipatch => bindActionCreators({}, dipatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatsList)