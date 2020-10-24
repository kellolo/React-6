import './layout/css/main.css';
import React from 'react';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';


import Controls from './components/Controls/Controls.jsx';
import AccountChats from './components/AccountChats/AccountChats.jsx';
import ChatField from './components/ChatField/ChatField.jsx';

const app = document.querySelector('#app');



const account = {
    name: "Ivan",
    avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
    contacts: [
        {
            id: 'ccontact_1',
            name: 'John',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            citation: 'Hi our deadlines are...',
        },
        {
            id: 'contact_2',
            name: 'Smith',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            citation: 'You hear that, Mr. Anderson?',
        },
        {
            id: 'contact_3',
            name: 'Morpheus',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            citation: 'Everything begins with choice.',
        },
        
    ],
}

ReactDom.render(
    <StylesProvider>
        <div className="layout">
            <Controls />
            <AccountChats accountName = {account.name} accauntAvatarUrl={account.avatarUrl}/>
            <ChatField chatName={'Vasya'} />
        </div>
        </StylesProvider>,
    app
);
