import './style.css';
import React, { Fragment } from 'react';

import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    accountAvatar: {width: '100%', height: '100%'}
}));

// import ChatInfo from '../ChatInfo/ChatInfo.jsx';
import Messages from '../Messages/Messages.jsx';

function ChatField(props) {
    const classes = useStyles();
    const {chatId, chats} = props;
    const chatInfo = chats.find((chat) => chat.id === chatId);
    return (
        <Fragment>
            <section className="lyaout__chat chat">
                <div className="chat__header chat-header">
                    <p className="chat-header__label">Chat with</p>
                    <div className="chat-header__details">
                        <div className="chat-header__img img-container ">
                            <Avatar alt={chatInfo.title} src={chatInfo.avatarUrl} className={classes.accountAvatar}/>
                        </div>                    
                        <h2 className="chat-header__title">{chatInfo.title}</h2>
                    </div>                    
                </div>
                <Messages />
            </section>
        </Fragment>
    );
}

const mapStateToProps = ({chatsReducer}) => ({
    chats: chatsReducer.chats,
});
export default connect(mapStateToProps)(ChatField);
