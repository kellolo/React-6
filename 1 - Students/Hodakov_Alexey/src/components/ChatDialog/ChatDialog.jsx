import "./style.css";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const useStyles = makeStyles({
  "contacts": {
    color: "#fff",
    backgroundColor: "#215c5a",
  },
  "white-color": {
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: "20px",
  },
  "icon-color":{
  backgroundColor: "#2f8481",
  }, 
  "burgundy-color":{
    backgroundColor: "#800020",
    } 
});

function SimpleDialog(props) {
  const classes = useStyles(); //className = { classes['white-color'] }
  const { onClose, selectedValue, open, contacts } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
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
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle  className = { classes['contacts'] } id="simple-dialog-title">Контакты</DialogTitle>
      <List>{contactsArray}</List>

      <ListItem
        autoFocus
        button
        onClick={() => handleListItemClick("addAccount")}
      >
        <ListItemAvatar>
          <Avatar className = { classes["burgundy-color"] }>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ДОБАВИТЬ" />
      </ListItem>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
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
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
                <br /> */}
      <Button variant="outlined"  className = { classes['white-color'] } onClick={handleClickOpen}>
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
