import React from 'react';
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

import { addChat } from '../../store/actions/chat.actions.js'
import { deleteChat } from '../../store/actions/chat.actions.js'
import { messagesInit } from '../../store/actions/messages.actions.js'
import { messagesClear } from '../../store/actions/messages.actions.js'

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

    let {activeIndex, chats, users, author } = props;

    let lastMessages = Object.keys(props.conversations).map(item => {
        let msgs = props.conversations[item].messages;
        if (msgs.length != 0) {
            return({ id: item, lastMessage: msgs[msgs.length-1].text})
        } else {
            return({ id: item, lastMessage: 'No messages yet'})
        }
        
    })
  
    let isActive;

    let addNewConversation = (name) => {
        let idToAdd = users.find(item => item.name == name).id;
        let newChatId = Number(chats.reduce((res, item) => {
            return (Math.max(res, item.id));
        }, 0)) + 1;
        props.addChat(newChatId, idToAdd, users[idToAdd].name, users[idToAdd].avatar);
        props.messagesInit(idToAdd);
    }
    
    let userList = []

    users.forEach (item => {
        if ((typeof chats.find(el => el.userId == item.id) == 'undefined') && (item.id != author)) {
            userList.push(item);
        }
    })

    let conversationsRender = chats.map((conversationElement) => {
        if (activeIndex == conversationElement.id) {
            isActive = true;
        } else {
            isActive = false;
        }

        let lastMessage = lastMessages.find(item => item.id == conversationElement.id).lastMessage;
        let regex = /(<img[^<]* alt=")(:[A-Za-z0-9]*:)("[^<]*>)/g
        lastMessage = lastMessage.replace(regex, '$2')
        lastMessage = lastMessage.replace(/&nbsp;/g, ' ')

        return(
            <Link to={'/chat/' + conversationElement.id + '/' } key={conversationElement.id}>
                <ListItem button selected={isActive}>
                    <ListItemAvatar>
                        <Avatar src={conversationElement.avatar}>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ conversationElement.name } secondary= { lastMessage } />
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
    chats: chatsReducer.chats,
    users: usersReducer.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push, addChat, deleteChat, messagesInit, messagesClear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);