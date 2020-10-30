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
        maxHeight: '45px',
        overflow: 'hidden',
    },
}));

const SelectedListItem = withStyles({
    '@global': {
        '.MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
            backgroundColor: 'rgba(37, 140, 96, 0.4)',
        },
        '.MuiListItem-root.Mui-selected:hover .MuiTypography-colorTextSecondary': {
            color: '#808080',
        },
        '.MuiListItem-button:hover': {
            backgroundColor: '#258C60',
        },
        '.MuiListItem-button:hover .MuiTypography-colorTextSecondary': {
            color: '#1C1C1C',
        }
    },

})(() => null);



function ChatListItem(props) {
    const {index, selectedIndex, chat, onClick, messages} = props;
    const classes = useStyles();

    const lastMessage = messages[messages.length-1];
    
    const handleListItemClick = (event, index, chatId) => {
        onClick(event, index, chatId);
      };

    return (
        <Fragment>
            <SelectedListItem/>
            <ListItem  
                button 
                alignItems="flex-start"
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index, chat.id)}
            >
                <ListItemAvatar>
                    <Avatar alt={chat.title} src={chat.avatarUrl} />
                </ListItemAvatar>
                <ListItemText className={classes.listItemText}
                    primary={chat.title}
                    secondary={lastMessage.text}
                />
            </ListItem>
        </Fragment>
    );
}

const mapStateToProps = ({messagesReducer}) => ({
    messages: messagesReducer.messages,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatListItem);
