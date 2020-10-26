import './style.css';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    accountAvatar: {width: '100%', height: '100%'}
}));

export default (props) => {
    const classes = useStyles();
    const {opponentInfo} = props;
    return (
        <Fragment>
            <div className="chat__header chat-header">
                    <p className="chat-header__label">Chat with</p>
                    <div className="chat-header__details">
                        <div className="chat-header__img img-container ">
                            <Avatar alt={opponentInfo.name} src={opponentInfo.avatarUrl} className={classes.accountAvatar}/>
                        </div>                    
                        <h2 className="chat-header__title">{opponentInfo.name}</h2>
                    </div>                    
                </div>
        </Fragment>
    );
}



