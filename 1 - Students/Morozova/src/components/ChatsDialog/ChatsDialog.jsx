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

const emails = ['Elisabeth', 'Marco', 'Michel', 'Joseph', 'Mirinda'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  openBtn: {
    color: '#333',
    border: '1px solid rgba(51, 51, 51, .5)',
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
      <DialogTitle id="simple-dialog-title">Choose friend to start chat</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add friend" />
        </ListItem>
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
  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    addFunction(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br /> */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={ classes.openBtn }>
        Open new chat
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}