import './layout/css/main.css';
import React from 'react';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';


import Controls from './components/Controls/Controls.jsx';
import AccountChats from './components/AccountChats/AccountChats.jsx';
import ChatField from './components/ChatField/ChatField.jsx';

const app = document.querySelector('#app');

const user = {
    name: "Ivan",
    avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
}

ReactDom.render(
    <StylesProvider>
        <div className="layout">
            <Controls />
            <AccountChats accountName = {user.name} accauntAvatarUrl={user.avatarUrl}/>
            <ChatField chatName={'Vasya'} />
        </div>
        </StylesProvider>,
    app
);
