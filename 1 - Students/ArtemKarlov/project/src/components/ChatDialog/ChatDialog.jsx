import './style.css';
import React, { Fragment } from 'react';

import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Messages from '../Messages/Messages.jsx';
import ChatDialogInfo from '../ChatDialogInfo/ChatDialogInfo.jsx';

const useStyles = makeStyles(() => ({
    accountAvatar: {width: '100%', height: '100%'}
}));



function ChatDailog(props) {
    const classes = useStyles();
    const {chatId, chats, contacts} = props;
    const currentChat = chats.find((chat) => chat.id === chatId);

    let chatContact = contacts.find((cont) => cont.id === currentChat.contacts);
    console.log(chatContact);
    chatContact = (chatContact === undefined) ? {name: 'BOT', middleName: '', surname: '', avatarUrl: '', } : chatContact;
    // const chatTitle = `${chatContact.name} ${chatContact.middleName} ${chatContact.surname}`;
     
    return (
        <Fragment>
            <ChatDialogInfo chatContact={chatContact} /> 
            <Messages currentChat={currentChat} />            
        </Fragment>
    );
}

const mapStateToProps = ({chatsReducer, contactsReducer}) => ({
    chats: chatsReducer.chats,
    contacts: contactsReducer.contacts,
});
export default connect(mapStateToProps)(ChatDailog);
