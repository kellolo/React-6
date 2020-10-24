import './style.css';
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
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  // button: {
  //   width: '40px',
  //   height: '40px',
  //   backgroundColor: '#258C60',
  //   border: 'none',
  //   borderRadius: '4px',
  //   '&:hover': {
  //     backgroundColor: '#23ad71',
  //   },
  //   '&:active': {
  //     backgroundColor: '#258c60',
  //   },
  // },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, contacts } = props;

  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Add chat with...</DialogTitle>
      <List>
        {contacts.map((contact) => (
          <ListItem button onClick={() => handleListItemClick(contact)} key={contact}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact} />
          </ListItem>
        ))}

        {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add contact" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const classes = useStyles();
  const { contacts, getContactName } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);    
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  React.useEffect(() => { 
    getContactName(selectedValue);
    setSelectedValue(null);
  });
 

  return (
    <div>
      <button onClick={handleClickOpen} className="chats__add-button button-shell"><img src="../src/layout/images/plus.png" alt="" className="button-shell__img"/></button>
      {/* <Button className={classes.button} variant="contained" onClick={handleClickOpen}></Button> */}
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} contacts={contacts}/>
    </div>
  );
}