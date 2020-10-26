import './style.css';
import React, { Fragment } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles(() => ({
    listItemText: {
        maxHeight: '60px',
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



export default (props) => {
    const {index, selectedIndex, chat, onClick} = props;
    const classes = useStyles();
    
    const handleListItemClick = (event, index) => {
        onClick(event, index);
      };

    return (
        <Fragment>
            <SelectedListItem/>
            <ListItem  
                button 
                alignItems="flex-start"
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
            >
                <ListItemAvatar>
                    <Avatar alt={chat.title} src={chat.avatarUrl} />
                </ListItemAvatar>
                <ListItemText className={classes.listItemText}
                    primary={chat.title}
                    secondary={chat.status}
                />
            </ListItem>
        </Fragment>
    );
}
