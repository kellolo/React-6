import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  margin: {
    margin: '20px auto',
  }
});

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };

    
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title">Выберете контакт</DialogTitle>
          <List>
            {props.contacts.map((contact) => (
              <ListItem button onClick={() => handleListItemClick(contact)} key={contact}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact} />
              </ListItem>
            ))}
    
            
          </List>
        </Dialog>
      );
    }
    
export default function SimpleDialogDemo(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(props.contacts[1]);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = (value) => { 
        setOpen(false);
        setSelectedValue(value);

        if (value) {
          props.addChat(value, props.chats.length+1);
          props.select(props.chats.length+1)

          //code for routing ???
          window.location.href = `http://localhost:3000/chat/${props.chats.length+1}/`
        }
        
    };

    
    return (
        <div style={{textAlign: 'center'}}>
            <Button style={{margin: '20px 0', color: '#0c4a48', border: '1px solid #0c4a48'}} 
                variant="outlined" 
                color="primary" 
                onClick={handleClickOpen}
                >
                New chat
            </Button>
            <SimpleDialog 
                selectedValue={selectedValue} 
                open={open} 
                onClose={handleClose}
                contacts={props.contacts} 
                />
        </div>
    );
}

    