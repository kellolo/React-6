import './style.css';
import React, { Fragment } from 'react';

import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    accountAvatar: {width: '100%', height: '100%'}
}));

import Messages from '../Messages/Messages.jsx';

function ChatDailog(props) {
    const classes = useStyles();
    const {chatId, chats, contacts} = props;
    const currentChat = chats.find((chat) => chat.id === chatId);

    let chatContact = contacts.find((cont) => cont.id === currentChat.contacts);
    chatContact = (chatContact === undefined) ? {name: 'BOT', middleName: '', surname: '', avatarUrl: '', } : chatContact;
    const chatTitle = `${chatContact.name} ${chatContact.middleName} ${chatContact.surname}`;
     
    return (
        <Fragment>
            <div className="chat__header chat-header">
                <p className="chat-header__label">Chat with</p>
                <div className="chat-header__details">
                    <div className="chat-header__img img-container ">
                        <Avatar alt={chatTitle} src={chatContact.avatarUrl} className={classes.accountAvatar}/>
                    </div>                    
                    <h2 className="chat-header__title">{chatTitle}</h2>
                </div>                    
            </div>
            <Messages currentChat={currentChat} />            
        </Fragment>
    );
}

const mapStateToProps = ({chatsReducer, contactsReducer}) => ({
    chats: chatsReducer.chats,
    contacts: contactsReducer.contacts,
});
export default connect(mapStateToProps)(ChatDailog);
