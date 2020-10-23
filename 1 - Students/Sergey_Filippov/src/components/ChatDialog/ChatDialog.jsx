import './style.css'
import React, { Component, Fragment } from 'react'
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
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';



const useStyles = makeStyles({
    'test-class': {
        fontSize: '2em',
        fontWeight: 'bold'
    }
})

function SimpleDialog(props) {
    const classes = useStyles(); //className = { classes['test-class'] }
    const { onClose, selectedValue, open, contacts } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    
    let contactsArray = contacts.map(cont => <ListItem button onClick={() => handleListItemClick(cont)} key={cont}>
                                                <ListItemAvatar>
                                                <Avatar>
                                                    <PersonIcon />
                                                </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={cont} />
                                            </ListItem>)
    return (
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                <List>
                    { contactsArray }
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
    const { contacts } = props;
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(contacts[1]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
   
    return (
        <div>
            <Typography variant="subtitle1">Выбран чат: {selectedValue}</Typography>
                <br />
            <Button variant="contained" color="primary"  onClick={handleClickOpen}>
                Выберите чат
            </Button>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}  contacts = { contacts } />
        </div>
    );
}