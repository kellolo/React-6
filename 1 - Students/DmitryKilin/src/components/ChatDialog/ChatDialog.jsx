
import './style.css'
import React, {Component, Fragment, useEffect} from 'react'
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
// import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import paths from "path";
import { newChat } from '../../store/actions/chats.actions.js'
import {loadContacts} from "../../store/actions/contacts.actions.js";
// import {contacts} from "../../moduls/Contacts/Contacts";
// import {contactsReducer} from "../../store/reducers/contacts.reducer.js";

const useStyles = makeStyles({
    'test-class': {
        fontSize: '2em',
        fontWeight: 'bold'
    },
    'list': {
        border: 'lightblue solid 2px',
        backgroundColor: '#192634',
        color: '#16B5E8'
    },
    'dialogTitle': {
        border: 'lightblue solid 2px',
        backgroundColor: '#192634',
        color: 'lightblue'
    },
})

function SimpleDialog(props) {
    const classes = useStyles();

    const { contacts, open } = props;
    // const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    // const contacts = [...props.contacts]

    const handleListItemClick = (value) => {
        onClose(value);
    };
    return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>
                    Select to chat with
                </DialogTitle>
                <List className={classes.list}>
                    {contacts.map((contact) => (
                    <ListItem button onClick={() => handleListItemClick(contact.name)} key={contact.email}>
                        <ListItemAvatar>
                        <Avatar alt="X" src={paths.join('/src','img', contact.avatar)}>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={contact.name} className = { classes['test-class'] } />
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
    // selectedValue: PropTypes.string.isRequired,
};

function SimpleDialogDemo(props) {

    const [open, setOpen] = React.useState(false);

    // const contacts = [...props.contactsFromRedux]
    // const [selectedValue, setSelectedValue] = React.useState(contacts[1].name);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
        // props.newChat(value)
    };

    useEffect(() => {
        props.loadContacts('/api/chats/')
        console.log(props.contactsFromRedux)
    })


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                new chat
            </Button>
            <SimpleDialog  open={open} onClose={handleClose} contacts={props.contactsFromRedux}/>

            {/*<SimpleDialog selectedValue={props.contactsFromRedux[0]} open={open} onClose={handleClose} contacts={props.contactsFromRedux}/>*/}
        </div>
    );
}

const mapStateToProps = ( {contactsReducer} ) => ( {contactsFromRedux: contactsReducer.contacts} );
const mapDispatchToProps = dispatch => bindActionCreators( {loadContacts}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo)