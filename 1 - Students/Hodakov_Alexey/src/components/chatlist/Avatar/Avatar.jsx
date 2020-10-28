import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function LetterAvatars(props) {
  const classes = useStyles();
  const { text } = props;

  return (
    <div className={classes.root}>
      <Avatar>{text}</Avatar>
    </div>
  );
}
