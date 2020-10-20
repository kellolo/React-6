import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import UserSelect from '../UserSelect/UserSelect.jsx'
import './style.css'

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
    const [ conversationsArray, setConversationsArray] = useState([
        {
            id: 0,
            name: 'Bot',
            avatar: 'https://via.placeholder.com/70',
            lastMessage: 'Bot: How are you?'
        },
        {
            id: 1,
            name: 'Bot2',
            avatar: 'https://via.placeholder.com/70/cccc55',
            lastMessage: 'Bot2: Hello! I am Bot2'
        },
        {
            id: 2,
            name: 'Bot3',
            avatar: 'https://via.placeholder.com/70/55cc55',
            lastMessage: 'Bot3: Hello! I am Bot3'
        }
    ]);

    const classes = useStyles();

    const [ activeIndex, setActiveIndex ] = useState(0);
    // const [ lastActiveIndex, setLastActiveIndex ] = useState(0);
  
    let isActive;

    const handleListItemClick = (event, index) => {
        // setLastActiveIndex(activeIndex);
        setActiveIndex(index);
        let activeConv = conversationsArray[index];
        props.getFunction(activeConv.id, activeConv.avatar, activeConv.name);
    };

    useEffect(() => {
        let activeConv = conversationsArray[activeIndex];
        props.getFunction(activeConv.id, activeConv.avatar, activeConv.name);
    }, [activeIndex]);

    let addNewConversation = (name) => {
        // setConversationsArray([...conversationsArray, 
        //     {
        //         id: 3,
        //         name: name,
        //         avatar: 'https://via.placeholder.com/70/55cc55',
        //         lastMessage: 'No messages'
        //     }
        // ])
    }

    let conversationsRender = conversationsArray.map((conversationElement) => {
        if (activeIndex == conversationElement.id) {
            isActive = true;
        } else {
            isActive = false;
        }
        return(
            <ListItem button onClick={(event) => handleListItemClick(event, conversationElement.id)} selected={isActive} key={conversationElement.id}>
                <ListItemAvatar>
                    <Avatar src={conversationElement.avatar}>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ conversationElement.name } secondary= { conversationElement.lastMessage } />
            </ListItem>
            // <Conversation isActive={isActive} conversationAvatar={conversationElement.avatar} conversationHeader={conversationElement.name} lastMessage={conversationElement.lastMessage} key = {conversationElement.id}/>
        )
    })
  
    return (
    <List className={classes.root}> 
        { conversationsRender }
        <UserSelect addNewConversation={addNewConversation} />
    </List>
    );
}