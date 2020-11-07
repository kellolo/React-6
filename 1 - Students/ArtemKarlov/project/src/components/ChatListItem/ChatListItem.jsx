import './style.css';
import React, { Fragment } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles(() => ({
    listItemText: {
        height: '44px',
        
    },
}));

const SelectedListItem = withStyles({
    '@global': {
        '.MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
            backgroundColor: 'rgba(37, 140, 96, 0.4)',
        },
        '.MuiListItem-root.Mui-selected:hover .MuiListItemText-secondary': {
            color: '#808080',
        },
        '.MuiListItem-button:hover': {
            backgroundColor: '#258C60',
        },
        '.MuiListItem-button:hover .MuiListItemText-secondary': {
            color: '#1C1C1C',
        },
        '.MuiListItemText-secondary': {
            color: '#808080',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        }
    },

})(() => null);



function ChatListItem(props) {
    const classes = useStyles();
    const {selectedIndex, chat, onClick, messages, contacts, account} = props;

    let chatContact = contacts.find((cont) => cont.id === chat.contacts);
    chatContact = (chatContact === undefined) ? {name: 'BOT', surname: '', avatarUrl: '', } : chatContact;
    const chatTitle = `${chatContact.name} ${chatContact.surname}`;
    
    const {messages: messagesId} = chat;
    const lastMessage = messages.find((msg) => msg.id === messagesId[messagesId.length-1]);
    const showedMessage = (lastMessage === undefined) ? '' : (lastMessage.sender === account.id) ? `Me: ${lastMessage.text}` : lastMessage.text;
    
    const handleListItemClick = (chatId) => {
        onClick(chatId);
      };

    return (
        <Fragment>
            <SelectedListItem/>
            <ListItem  
                button 
                alignItems="flex-start"
                selected={selectedIndex === chat.id}
                onClick={() => handleListItemClick(chat.id)}
            >
                <ListItemAvatar>
                    <Avatar alt={chatTitle} src={chatContact.avatarUrl} />
                </ListItemAvatar>
                <ListItemText className={classes.listItemText}
                    primary={chatTitle}
                    secondary={showedMessage}
                />
            </ListItem>
        </Fragment>
    );
}

const mapStateToProps = ({messagesReducer, contactsReducer, accountReducer}) => ({
    messages: messagesReducer.messages,
    contacts: contactsReducer.contacts,
    account: accountReducer.account,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatListItem);
