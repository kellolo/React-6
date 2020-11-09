
import './style.css'
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import paths from "path";

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
    'typo': {
        margin: '20px auto'
    },
    'avatar': {
        margin: '0 auto',
    },
})

function ShowInfo(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open, user } = props;

    const handleClose = () => {
        onClose(true);
    };

    // const contacts = [...props.contacts]

    const handleListItemClick = (value) => {
        // onClose(value);
    };

    let avatarPath = paths.join('/src','img', user.avatar);

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
            <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>
                <Avatar alt="X" src={avatarPath} className={classes.avatar}></Avatar>
                <Typography variant="body1" className={classes.typo}>{user.name}</Typography>
                <Typography variant="body1" className={classes.typo}>{user.email}</Typography>
            </DialogTitle>
        </Dialog>
    )
}

ShowInfo.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    // selectedValue: PropTypes.string.isRequired,
};

function SimpleDialogDemo(props) {

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        // setSelectedValue(value);
    };

    let avatarPath = paths.join( 'src','img', props.user.avatar);

    return (
        <div>
            <br />
                <Avatar alt="X" style={{cursor: 'pointer'}} src={avatarPath} onClick={handleClickOpen} />
            <ShowInfo  open={open} onClose={handleClose} user={props.user}/>
        </div>
    );
}

const mapStateToProps = ({userReducer}) => ({
    user: userReducer
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo)