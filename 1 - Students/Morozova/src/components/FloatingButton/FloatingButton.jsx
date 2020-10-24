import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  openBtn: {
    backgroundColor: '#bdc1ff',
    color: '#555',
  }
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();
  const { send } = props;
  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add" onClick={ send } className={ classes.openBtn }>
        <SendIcon />
      </Fab>
    </div>
  );
}