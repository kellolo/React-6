import './style.css';
import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

export default props => {
    let { name } = props;
    const useStyles = makeStyles({
        text: {
            fontFamily: 'Harmattan',
            fontWeight: 'bolder',
            fontSize: '24px',
            lineHeight: '24px',
            color: '#333',
            textDecoration: 'none'
        }
      });
      
    const classes = useStyles();
    return (
        <div  className= { classes.text }>
        <ListItem button className= { classes.text }>
            <ListItemText primary = { name } />
        </ListItem></div>
    )
}