import './style.css';
import React, { Component, Fragment } from 'react';
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
import AddIcon from '@material-ui/icons/Add';
/* import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors'; */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendChat } from '../../store/actions/chats.action.js'

/* const emails = ['username@gmail.com', 'user02@gmail.com']; */

const useStyles = makeStyles({
    "w-400px" : {
        width: "400px",
        
      },
       "contacts": {
        color: "#fff",
        backgroundColor: "#215c5a",
        width: "400px",
      },
         
      "pink-color": {
        color: "#fa81ea",
        border: "1px solid #fa81ea",
        borderRadius: "20px",
      },  
      "icon-color":{
        backgroundColor: "#2f8481",
      }, 
      "burgundy-color":{
        backgroundColor: "#800020",
        } 
})

function SimpleDialog(props) {
    const classes = useStyles(); //className = { classes['white-color'] }
    const { onClose, selectedValue, open, contacts} = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
    const handleListItemClickAdd = (value) => {
      console.log('Будет добавление нового')
    };
  
    let contactsArray = contacts.map((cont) => (
      <ListItem button onClick={() => handleListItemClick(cont)} key={cont}>
        <ListItemAvatar >
          <Avatar className = { classes['icon-color'] }>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={cont} />
      </ListItem>
    ));
  
    return (
      <Dialog 
        className='chat_dialog'
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle  className = { classes['contacts'] } id="simple-dialog-title">Контакты</DialogTitle>
        <List className = { classes['w-400px'] }>{contactsArray}</List>
  
        <ListItem
            className="list_item"
          autoFocus
          button
          onClick={() => handleListItemClickAdd("addAccount")}
        >
          <ListItemAvatar>
            <Avatar className = { classes["burgundy-color"] }>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          </ListItem>
      </Dialog>
    );
  }
  
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  
  function SimpleDialogDemo(props) {
    const classes = useStyles(); //className = { classes['white-color'] }
    const [open, setOpen] = React.useState(false);
    const { contacts } = props;
    const [selectedValue, setSelectedValue] = React.useState(contacts[1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
      props.sendChat(value);
    };
  
    return (
      <div>
        {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
                  <br /> */}
        <Button variant="outlined"  className = { classes['pink-color'] } onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          contacts={contacts}
        />
      </div>
    );
  }
  const mapStateToProps = ({ chatsReducer, contactsReducer }) => ({
    chatsFromRedux: chatsReducer.chats,
    contactsFromRedux: contactsReducer.contacts
  });
  const mapDispatchToProps = dispatch => bindActionCreators({ sendChat }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo);

/* function SimpleDialog(props) {
    const classes = useStyles(); //className = { classes['test-class'] }
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                <List>
                    {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} className = { classes['test-class'] } />
                    </ListItem>
                    ))}

                    <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                        <ListItemAvatar>
                            <Avatar>
                                <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Add account" />
                    </ListItem>
                </List>
            </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };


    console.log(props.contacts);

    return (
        <div>
            <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
                <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
} */