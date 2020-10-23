import './style.css';
import React, { Fragment } from 'react';

import Account from '../Account/Account.jsx';
import Chats from '../Chats/Chats.jsx';


export default (props) => {
    const {accountName, accauntAvatarUrl} = props;
    const contactList = ["Ivanov", "Petrov", "Sidorov"];
    return (
        <Fragment>
            <div className="layout__account-chatlist">
                <Account userName={accountName} avatarUrl={accauntAvatarUrl} />
                <Chats />
                
            </div>
        </Fragment>
    );
}
