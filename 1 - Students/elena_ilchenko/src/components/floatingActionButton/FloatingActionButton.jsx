import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import './FloatingAction.css';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#0c4a48',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#0f5e5b',
        }
    },
  }));

export const FloatingActionButton = (props) => {
    const classes = useStyles();

    return(
        <Button
            variant="contained"
            // color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={props.send}
        >
            Send
        </Button>
    );
};
