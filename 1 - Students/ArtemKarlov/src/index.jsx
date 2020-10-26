import './layout/css/main.css';
import React from 'react';
import ReactDom from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import Controls from './components/Controls/Controls.jsx';
import AccountChats from './components/AccountChats/AccountChats.jsx';
import ChatField from './components/ChatField/ChatField.jsx';

const app = document.querySelector('#app');

const customTheme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root : {
                backgroundColor: '#258C60',
                color: '#ffffff',
            }
        },
        MuiListItemIcon: {
            root: {
                color: '#ffffff',
            }
        },
        MuiIconButton: {
            root: {
                color: '#ffffff',
            }
        },
        MuiTypography: {
            colorTextSecondary: {
                color: '#808080'
            },
        },
    }
});



const account = {
    name: "Ivan",
    avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
    contacts: [
        {
            id: 'ccontact_1',
            name: 'John',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            citation: 'Hi our deadlines are. Hi our deadlines are... Hi our deadlines are.....',
        },
        {
            id: 'contact_2',
            name: 'Smith',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
            citation: 'You hear that, Mr. Anderson?',
        },
        {
            id: 'contact_3',
            name: 'Morpheus',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
            citation: 'Everything begins with choice.',
        },
        
    ],
}

ReactDom.render(
    <MuiThemeProvider theme={customTheme}>
        <div className="layout">
            <Controls />
            <AccountChats account = {account} />
            <ChatField opponent={{name: 'Vasya', avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149072.svg2'}} />
        </div>
    </MuiThemeProvider>,
    app
);
