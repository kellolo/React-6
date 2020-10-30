import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  
  avatar:{
      color:"#fae2f7"
  }
}));

export default function LetterAvatars(props) {
  const classes = useStyles();
  const { text } = props;

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>{text}</Avatar>
    </div>
  );
}