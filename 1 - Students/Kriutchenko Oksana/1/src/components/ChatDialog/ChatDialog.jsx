import './style.css';
import React, { Component, Fragment, useEffect } from 'react';
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
import { loadChats } from '../../store/actions/chats.action.js'
import { loadContacts } from "../../store/actions/contacts.action.js";
/* const emails = ['username@gmail.com', 'user02@gmail.com']; */

const useStyles = makeStyles({
  "w-400px": {
    width: "400px",

  },
  "contacts": {
    color: "#fff",
    backgroundColor: "#fa81ea",
    width: "400px",
  },

  "pink-color": {
    color: "#000",
    backgroundColor: "#fa81ea",
    border: "1px solid #fa81ea",
    borderRadius: "20px",
    marginBottom: "0",
    width: "80%"

  },
  "icon-color": {
    backgroundColor: "#fa81f3",
  },
  /*      "burgundy-color":{
         backgroundColor: "#808080",
         }  */
})

function SimpleDialog(props) {
  const classes = useStyles(); //className = { classes['white-color'] }
  const { onClose, selectedValue, open, contacts} = props;
 /*  const { contacts, open } = props; */

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
        <Avatar className={classes['icon-color']}>
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
      <DialogTitle className={classes['contacts']} id="simple-dialog-title">Контакты</DialogTitle>
      <List className={classes['w-400px']}>{contactsArray}</List>

      <ListItem
        className="list_item"
        autoFocus
        button
        onClick={() => handleListItemClickAdd("addAccount")}
      >
        <ListItemAvatar>
          <Avatar className={classes["burgundy-color"]}>
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
  const [selectedValue, setSelectedValue] = React.useState(contacts[1].name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    props.loadChats(value);
  };
  useEffect(() => {
    props.loadContacts('/api/chats/')
    console.log(props.contactsFromRedux)
  })

  return (
    <div>

      <Button variant="outlined" className={classes['pink-color']} onClick={handleClickOpen}>
        Добавить контакт
        </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        contacts={props.contactsFromRedux}
      />
    </div>
  );
}
/* const mapStateToProps = ({ chatsReducer, contactsReducer }) => ({
  chatsFromRedux: chatsReducer.chats,
  contactsFromRedux: contactsReducer.contacts
});
const mapDispatchToProps = dispatch => bindActionCreators({ loadChats }, dispatch); */
const mapStateToProps = ( {contactsReducer} ) => ( {contactsFromRedux: contactsReducer.contacts} );
const mapDispatchToProps = dispatch => bindActionCreators( {loadContacts}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo);
