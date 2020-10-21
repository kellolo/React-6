import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import UserSelect from '../UserSelect/UserSelect.jsx'
import './style.css'
import { CollectionsOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
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

    const classes = useStyles();

    let {activeIndex, conversationsArray} = props;
  
    let isActive;

    let addNewConversation = (name) => {
        let idToAdd = props.contacts.find(item => item.name == name).id;
        props.addChatScript(idToAdd);
    }
    
    let userList = []

    props.contacts.forEach (item => {
        if (typeof props.conversationsArray.find(el => el.userId == item.id) == 'undefined') {
            userList.push(item);
        }
    })

    console.log(userList)

    let conversationsRender = conversationsArray.map((conversationElement) => {
        if (activeIndex == conversationElement.id) {
            isActive = true;
        } else {
            isActive = false;
        }
        return(
            <Link to={'/chat/' + conversationElement.id + '/' } key={conversationElement.id}>
                <ListItem button selected={isActive}>
                    <ListItemAvatar>
                        <Avatar src={conversationElement.avatar}>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={ conversationElement.name } secondary= { conversationElement.lastMessage } />
                </ListItem>
            </Link>
            // <Conversation isActive={isActive} conversationAvatar={conversationElement.avatar} conversationHeader={conversationElement.name} lastMessage={conversationElement.lastMessage} key = {conversationElement.id}/>
        )
    })
  
    return (
    <List className={classes.root}> 
        { conversationsRender }
        <UserSelect userList={userList} addNewConversation={addNewConversation} />
    </List>
    );
}