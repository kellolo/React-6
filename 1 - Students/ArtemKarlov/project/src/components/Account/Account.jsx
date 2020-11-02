import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    accountAvatar: {width: '100%', height: '100%'}
}));

function Account(props) {
    const classes = useStyles();
    const {account} = props;
    return (
        <Fragment>
            <section className="layout__account account">
                    <div className="account__img img-container">
                        <Avatar alt={account.name} src={account.avatarUrl} className={classes.accountAvatar}/>
                    </div>
                    
                    <h1 className="account__name">{`${account.name} ${account.middleName} ${account.surname}`}</h1>
                    <p className="account__label">My acount</p>
                </section>
        </Fragment>
    );
}

const mapStateToProps = ({accountReducer}) => ({
    account: accountReducer.account,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Account);
