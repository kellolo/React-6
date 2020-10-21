
    import React, { Fragment } from 'react';
    import './ChatList.css';
    import ChatDialog from '../ChatDialog/ChatDialog'
    import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
    import CommentIcon from '@material-ui/icons/Comment';
    import { Link } from 'react-router-dom';
    import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles((theme) => ({
        chatIcon: {
            color: '#0c4a48',
        },
      }));

    export default props => {
        const classes = useStyles();

        return (
            <Fragment>
                <div className='ChatList'>
                    <List className="chats_wrapper">
                        { props.chats.map((chat, i) => 
                            <Link className="link" key={i+1} to={`/chat/${chat.chatId}/`}>
                                <div onClick={() => props.onSelect(chat.chatId)}>
                                    <ListItem button selected={props.selected === chat.chatId}>
                                        <ListItemIcon className={classes.chatIcon}>
                                            <CommentIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={ chat.chatName } />
                                    </ListItem>
                                </div>
                            </Link>
                            )
                        }
                    </List>
                    <div>
                        <ChatDialog 
                            contacts={props.contacts}
                            addChat={props.addChat}
                            />
                    </div>

                </div>
            </Fragment>
        )
        
    }




    
    