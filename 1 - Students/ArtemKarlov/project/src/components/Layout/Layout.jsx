import './style.css';
import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Controls from '../Controls/Controls.jsx';
// import AccountChats from '../AccountChats/AccountChats.jsx';
import Account from '../Account/Account.jsx';
import Chats from '../Chats/Chats.jsx';
import ChatField from '../ChatField/ChatField.jsx';

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
        // MuiTypography: {
        //     colorTextSecondary: {
        //         color: '#808080'
        //     },
        // },
    }
});

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
    }
    
    componentDidUpdate() {
        
    }

    render() {
        const {match} = this.props;
        const {params:{chatId}} = match;       
        
        return ( 
            <MuiThemeProvider theme={customTheme}>           
                <div className="layout">
                    <Controls />
                    {/* <AccountChats account = {account} /> */}
                    <div className="layout__account-chatlist">
                        <Account />
                        <Chats />                
                    </div>
                    <ChatField chatId={(chatId)? chatId : 'init'} />
                </div>
            </MuiThemeProvider>
        )
    }
}
