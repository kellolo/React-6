import './style.css';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    accountAvatar: {width: '100%', height: '100%'}
}));

export default (props) => {
    const classes = useStyles();
    const {userName, avatarUrl} = props;
    return (
        <Fragment>
            <section className="layout__account account">
                    <div className="account__img img-container">
                        <Avatar alt={userName} src={avatarUrl} className={classes.accountAvatar}/>
                    </div>
                    
                    <h1 className="account__name">{userName}</h1>
                    <p className="account__label">My acount</p>
                </section>
        </Fragment>
    );
}

