import React, { useEffect } from 'react';
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

import { useSelector, useDispatch } from 'react-redux'

import { addChat, deleteChat, loadChat, loadChats } from '../../store/actions/chat.actions.js'
import {  loadMessages } from '../../store/actions/messages.actions.js'

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

export default function ChatList(props) {

    // const conversations = useSelector(messagesReducer => messagesReducer.messagesReducer.conversations);
    // const messages = useSelector(messagesReducer => messagesReducer.messagesReducer.messages);
    const chats = useSelector(chatsReducer => chatsReducer.chatsReducer.chats);
    const activeChat = useSelector(chatsReducer => chatsReducer.chatsReducer.activeChat);
    const users = useSelector(usersReducer => usersReducer.usersReducer.users);

    const dispatch = useDispatch();

    let {activeIndex, author } = props;

    useEffect(() => {
        dispatch(loadChats('/api/chats/' + author))
        if (activeIndex != -1 && Object.keys(activeChat).length !=0) {
            dispatch(loadMessages(activeChat.messages));
        }
    }, [activeChat.messages])

    let callDeleteChat = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        let chatIdToDelete = e.nativeEvent.path.find(item => item.className == "chat-link").dataset.chatItemId
        await dispatch(deleteChat('/api/chatDelete/' + chatIdToDelete));
        // dispatch(messagesClear(chatIdToDelete));
        if (props.activeIndex == chatIdToDelete) {
            dispatch(push('/'));
        }
        dispatch(loadChats('/api/chats/' + author));
    }

    const classes = useStyles();

    // let lastMessages = conversations.map(item => {
    //     let msgs = item.messages;
    //     let msgText;
    //     console.log(msgs)
    //     if (msgs) {
    //         if (msgs.length != 0) {
    //             msgText = messages.find(item => item.id == msgs[msgs.length-1]).text
    //             return({ id: item.id, lastMessage: msgText })
    //         } else {
    //             return({ id: item.id, lastMessage: 'No messages yet'})
    //         }
    //     }
    // })
  
    // let lastMessages = chats.map(item => ({id: item.id, lastMessage: item.lastMessage}));

    let isActive;

    let addNewConversation = async (name) => {
        let userToAdd = users.find(item => item.name == name)
        let newChatId = 'c-' + (Number(chats.reduce((res, item) => {
            return (Math.max(res, item.id.slice(2)));
        }, 0)) + 1);
        await dispatch(addChat(`/api/chatAdd/${newChatId}`, author, userToAdd.id, userToAdd.name, userToAdd.avatar)); //addChat(newChatId, userToAdd.name, userToAdd.avatar)
        dispatch(loadChats('/api/chats/' + author));
    }

    let selectChat = async (e) => {
        let chatId = e.nativeEvent.path.find(item => item.className == "chat-link").dataset.chatItemId;
        if (chatId) {
            await dispatch(loadChat(`/api/chat/${chatId}`));
            // await props.loadMessages(props.activeChat.messages);
        }
    }
    
    let userList = []

    users.forEach (item => {
        if ((typeof chats.find(el => el.title == item.name) == 'undefined') && (item.id != author)) {
            userList.push(item);
        }
    })

    let conversationsRender = chats.map((conversationElement) => {
        if (activeIndex == conversationElement.id) {
            isActive = true;
        } else {
            isActive = false;
        }

        //let thisChat = conversations.find(item => item.id == conversationElement.id)
        if (Object.keys(chats).length != 0) {

        // let thisChat = activeChat; //chats.find(item => item.id == conversationElement.id)
        // let thisUser = users.find(item => item.id == thisChat.userId)
        // let lastMessage = lastMessages.find(item => item.id == thisChat.id).lastMessage;

        let lastMessage = conversationElement.lastMessage;
        let userAvatar = conversationElement.avatar;
        let userName = conversationElement.title;

        let regex = /(<img[^<]* alt=")(:[A-Za-z0-9_]*:)("[^<]*>)/g
        lastMessage = lastMessage.replace(regex, '$2')
        lastMessage = lastMessage.replace(/&nbsp;/g, ' ')

        return(
            <Link
                data-chat-item-id = { conversationElement.id } className="chat-link"
                to={'/chat/' + conversationElement.id + '/' }
                key={conversationElement.id}
                onClick = { selectChat }
                >
                <ListItem button selected={isActive}>
                    <ListItemAvatar>
                        <Avatar src={userAvatar}>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ userName } secondary= { lastMessage } />
                    <div className = "delete-chat-button" onClick = { callDeleteChat } ><IconButton aria-label="delete"><DeleteIcon /></IconButton></div>
                </ListItem>
            </Link>
        )
        }
    })

    return (
    <List className={classes.root}> 
        { conversationsRender }
        <UserSelect userList={userList} addNewConversation={addNewConversation} />
    </List>
    );
}

// const mapStateToProps = ({ chatsReducer, usersReducer, messagesReducer }) => ({
//     conversations: messagesReducer.conversations,
//     messages: messagesReducer.messages,
//     chats: chatsReducer.chats,
//     activeChat: chatsReducer.activeChat,
//     users: usersReducer.users,
// });

// const mapDispatchToProps = dispatch => bindActionCreators({ push, addChat, deleteChat, messagesInit, messagesClear, loadChat, loadMessages }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(ChatList);