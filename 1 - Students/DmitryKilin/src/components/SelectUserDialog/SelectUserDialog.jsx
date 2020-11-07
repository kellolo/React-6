
import './style.css'
import React, {Component, Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import paths from "path";
import {loadContacts} from "../../store/actions/contacts.actions.js"
import {changeUser} from "../../store/actions/user.actions";


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
    'avatar': {
        margin: '20px 40px',
        cursor: 'pointer'
    },
})

function SimpleDialog(props) {
    const classes = useStyles();

    const { onClose, selectedValue, open, contacts } = props;

    const handleClose = () => {
        onClose(selectedValue);

    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
            <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>
                    Select user:
                </DialogTitle>
                <List className={classes.list}>
                    {contacts.map((contact) => (
                    <ListItem button onClick={() => handleListItemClick(contact.id)} key={contact.id}>
                        <ListItemAvatar>
                        <Avatar alt="X" src={paths.join('/src','img', contact.avatar)}>
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={contact.name} className = { classes['test-class'] } />
                    </ListItem>
                    ))}
                </List>
            </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};


function SelectUserDialog(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState(props.userFromRedux.id);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {

        let newUser = _findUser(value)

        props.changeUser(newUser)
        setOpen(false);
    };

    useEffect(() => {
        props.loadContacts('/api/contacts/')
    }, [])

    function _findUser(userId) {
        return props.contactsFromRedux.find((element) => element.id === userId)
    }


    const avatarPath = paths.join( '/src','img', props.userFromRedux.avatar);

    return (
        <div>
            <Avatar alt="X" className={classes.avatar} src={avatarPath} onClick={handleClickOpen} />

            <SimpleDialog  open={open} onClose={handleClose} contacts={props.contactsFromRedux}
                           selectedValue={selectedValue}
            />
        </div>
    );
}

const mapStateToProps = ( {contactsReducer, userReducer} ) => ( {
    contactsFromRedux: contactsReducer.contacts,
    userFromRedux: userReducer
} );
const mapDispatchToProps = dispatch => bindActionCreators( {loadContacts, changeUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectUserDialog)