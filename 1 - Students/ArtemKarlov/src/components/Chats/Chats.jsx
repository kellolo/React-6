import './style.css';
import React, { Fragment } from 'react';

import ChatList from '../ChatList/ChatList.jsx';
import ChatAdd from '../ChatAdd/ChatAdd.jsx';

export default () => {

    return (
        <Fragment>
            <section className="layout__chats chats">
                    <div className="chats__header">
                        <h2 className="chats__title">Chats</h2>
                        {/* <button className="chats__add-button button-shell"><img src="/images/plus.png" alt="" class="button-shell__img"/></button> */}
                        <ChatAdd />
                    </div>
                    <ChatList />
                </section>
        </Fragment>
    );
} 