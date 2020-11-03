import './style.css';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadAccount} from '../../store/actions/account.actions.js';
import {loadContacts} from '../../store/actions/contacts.actions.js';
import {addChat, loadChats} from '../../store/actions/chats.actions.js';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

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

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
        const accountID = "user-0";
        this.props.loadAccount('api/'+ accountID);
        this.props.loadContacts('api/contacts/'+ accountID);
    }
    
    componentDidUpdate() {
        
    }

    render() {
        const {match} = this.props;
        const {params:{chatId}} = match;  
        
        if (this.props.isAccountLoading) {
            return (<CircularProgress/>); //по идее тут нужно отрисовать лодер
        }         
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

const mapStateToProps = ({accountReducer}) => ({account: accountReducer.account, isAccountLoading: accountReducer.isAccountLoading});
const mapDispatchToProps = dispatch => bindActionCreators({loadAccount, loadContacts, loadChats}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
