
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


const useStyles = makeStyles({
    'test-class': {
        fontSize: '2em',
        fontWeight: 'bold'
    }
})

function SimpleDialog(props) {
    const classes = useStyles(); //className = { classes['test-class'] }
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const emails = [...props.emails]

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

    const emails = [...props.contacts]

    const [selectedValue, setSelectedValue] = React.useState(emails[1]);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const {chats} = props;

    return (
        <div>
            <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
                <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} emails={emails} chats={chats}/>
        </div>
    );
}