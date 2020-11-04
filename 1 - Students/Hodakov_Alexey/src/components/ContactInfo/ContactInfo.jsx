import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from "@material-ui/core/styles";
import Photo from './Photo/Photo.jsx';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteDialog } from "../../store/actions/deleteDialog.actions.js";
// import { Redirect } from 'react-router';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const useStyles = makeStyles({
    "text-red" : {
        color: "#800020",
    },
    "text-green" : {
        color: "#215c5a",
      },
  });

function AlertDialogSlide(props) {
  let { userId, chatName, phone, email, about } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDelete = (value) => {
    setOpen(false);
    props.deleteDialog('/api/deletedialog/' + userId + "/" + chatName)
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
        <div className="header__text header__text__green" onClick={handleClickOpen}> { chatName } </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className = { classes['text-green'] } id="alert-dialog-slide-title">{ chatName}</DialogTitle>
        <DialogContent className="d-flex">
            <Photo />
            <div>
                <div className="p-1">
                    <PhoneAndroidIcon /><span> {phone}</span>
                </div>
                <div className="p-1">
                    <AlternateEmailIcon /><span> {email} </span>
                </div>
                <DialogContentText id="alert-dialog-slide-description">           
                    {about} 
                </DialogContentText>
            </div>
        </DialogContent>
        <DialogActions>
          <Button data={chatName} onClick={() => handleCloseDelete(chatName)} className = { classes['text-red'] } color="primary">
            УДАЛИТЬ
          </Button>
          <Button onClick={handleClose} color="primary">
            ЗАКРЫТЬ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = ({ chatsReducer, contactsReducer }) => ({
  chatsFromRedux: chatsReducer.chats,
  contactsFromRedux: contactsReducer.contacts,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ deleteDialog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialogSlide);
