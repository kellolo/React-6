import React, { useEffect, useState } from 'react';
import { push } from 'connected-react-router'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import UserSelect from '../UserSelect/UserSelect.jsx'
import './style.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addChat, deleteChat } from '../../store/actions/chat.actions.js'
import { messagesInit, messagesClear } from '../../store/actions/messages.actions.js'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
    minHeight: '100vh',
    backgroundColor: '#fbfbfb',
    borderRight: '1px solid #cc6c6c7a',
    borderLeft: '1px solid #cc6c6c7a',
    paddingTop: 0,
  },
}));

function ChatList(props) {

    let callDeleteChat = (e) => {
        e.stopPropagation();
        e.preventDefault()
        let chatIdToDelete = e.nativeEvent.path.find(item => item.className == "delete-chat-button").dataset.chatItemId
        props.deleteChat(chatIdToDelete);
        props.messagesClear(chatIdToDelete)
        if (props.activeIndex == chatIdToDelete) {
            props.push('/')
        }
    }

    const classes = useStyles();

    let {activeIndex, chats, users, conversations, messages, author } = props;

    let lastMessages = conversations.map(item => {
        let msgs = item.messages;
        let msgText;
        if (msgs.length != 0) {
            msgText = messages.find(item => item.id == msgs[msgs.length-1]).text
            return({ id: item.id, lastMessage: msgText })
        } else {
            return({ id: item.id, lastMessage: 'No messages yet'})
        }
    })
  
    let isActive;

    let addNewConversation = (name) => {
        let userToAdd = users.find(item => item.name == name)
        let idToAdd = userToAdd.id;
        let newChatId = 'c-' + (Number(chats.reduce((res, item) => {
            return (Math.max(res, item.id.slice(2)));
        }, 0)) + 1);
        props.addChat(newChatId, idToAdd, userToAdd.name, userToAdd.avatar);
        props.messagesInit(newChatId, idToAdd);
    }
    
    let userList = []

    users.forEach (item => {
        if ((typeof conversations.find(el => el.userId == item.id) == 'undefined') && (item.id != author)) {
            userList.push(item);
        }
    })

    let conversationsRender = chats.map((conversationElement) => {
        if (activeIndex == conversationElement.id) {
            isActive = true;
        } else {
            isActive = false;
        }

        let thisChat = conversations.find(item => item.id == conversationElement.id)
        let thisUser = users.find(item => item.id == thisChat.userId)

        let lastMessage = lastMessages.find(item => item.id == thisChat.id).lastMessage;
        let regex = /(<img[^<]* alt=")(:[A-Za-z0-9_]*:)("[^<]*>)/g
        lastMessage = lastMessage.replace(regex, '$2')
        lastMessage = lastMessage.replace(/&nbsp;/g, ' ')

        return(
            <Link to={'/chat/' + conversationElement.id + '/' } key={conversationElement.id}>
                <ListItem button selected={isActive}>
                    <ListItemAvatar>
                        <Avatar src={thisUser.avatar}>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ thisUser.name } secondary= { lastMessage } />
                    <div className = "delete-chat-button" data-chat-item-id = { conversationElement.id } onClick = { callDeleteChat } ><IconButton aria-label="delete"><DeleteIcon /></IconButton></div>
                </ListItem>
            </Link>
        )
    })

    return (
    <List className={classes.root}> 
        { conversationsRender }
        <UserSelect userList={userList} addNewConversation={addNewConversation} />
    </List>
    );
}

const mapStateToProps = ({ chatsReducer, usersReducer, messagesReducer }) => ({
    conversations: messagesReducer.conversations,
    messages: messagesReducer.messages,
    chats: chatsReducer.chats,
    users: usersReducer.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push, addChat, deleteChat, messagesInit, messagesClear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);