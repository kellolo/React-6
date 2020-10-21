
import './style.css'

import React from 'react'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
import { blue } from '@material-ui/core/colors'

const users = [{name: 'Bot4', avatar: 'https://via.placeholder.com/30/22AA22'}, {name: 'Bot5', avatar: 'https://via.placeholder.com/30/AA2222'}];
const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
        props.addNewConversationSD(value);
      onClose(value);
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Slect user to start new chat</DialogTitle>
        <List>
          {users.map((user) => (
            <ListItem button onClick={() => handleListItemClick(user.name)} key={user.name}>
              <ListItemAvatar>
                <Avatar src={user.avatar} className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
          ))}
  
          {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem> */}
        </List>
      </Dialog>
    );
  }
  
  export default function UserSelect(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(users[1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };

    let addNewConversationSDD = (value) => {
        props.addNewConversation(value);
    }
  
    return (
      <div>
        <Button className="chat-add-button" variant="outlined" color="primary" onClick={handleClickOpen}>
          <AddIcon />
        </Button>
        <SimpleDialog addNewConversationSD = {addNewConversationSDD} selectedValue={selectedValue} open={open} onClose={handleClose} />
      </div>
    );
  }
  
    