import './style.css';
import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import Controls from '../Controls/Controls.jsx';
import AccountChats from '../AccountChats/AccountChats.jsx';
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
        MuiTypography: {
            colorTextSecondary: {
                color: '#808080'
            },
        },
    }
});


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: ['Petrovich', 'Alekseich', 'Vasilych'],
            chats: [
                {
                    title: 'Chat 1',
                    _id: 'ch_1'
                }, 
                {
                    title: 'Chat 2',
                    _id: 'ch_2'
                }
            ]
        }
    }
    
    componentDidMount() {
        // this.props.setChats(this.state.chats);
    }
    
    componentDidUpdate() {
        
    }

    render() {
        // let chat = this.state.chats.find(el => el._id == this.props.chatId);
        // let chatName = chat ? chat.title : 'Welcome';

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
        
        return (
            <MuiThemeProvider theme={customTheme}>
                <div className="layout">
                    <Controls />
                    <AccountChats account = {account} />
                    <ChatField opponent={{name: 'Vasya', avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149072.svg2'}} />
                </div>
            </MuiThemeProvider>
        )
    }
}





