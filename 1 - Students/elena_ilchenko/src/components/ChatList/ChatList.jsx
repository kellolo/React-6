
    import React, { Fragment, useEffect } from 'react';
    import './ChatList.css';
    import ChatDialog from '../ChatDialog/ChatDialog'
    import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
    import CommentIcon from '@material-ui/icons/Comment';
    import { Link } from 'react-router-dom';
    import { makeStyles } from '@material-ui/core/styles';
    import { connect } from 'react-redux';
    import { bindActionCreators } from 'redux';
    import { addChat } from '../../store/actions/chats.action';
    import { loadChats } from '../../store/actions/chats.action';

    const useStyles = makeStyles((theme) => ({
        chatIcon: {
            color: '#0c4a48',
        },
    }));

    const ChatList = props => {
        const classes = useStyles();

        useEffect(() => {
            let userId = 'u-1';
            props.loadChats('/api/chats/' + userId)
        }, []);
        
        return (
            <Fragment>
                <div className='ChatList'>
                    <List className="chats_wrapper">
                        { props.chatsFromRedux.map((chat, i) => 
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
                            select={props.onSelect}
                            chats={props.chatsFromRedux}
                            />
                    </div>

                </div>
            </Fragment>
        )
        
    }

    const mapStateToProps = ({ chatsReducer }) => ({
        chatsFromRedux: chatsReducer.chats
    });
    const mapDispatchToProps = dispatch => bindActionCreators({ addChat, loadChats }, dispatch);
    export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
    