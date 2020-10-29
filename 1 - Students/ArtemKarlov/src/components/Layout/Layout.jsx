import './style.css';
import React from 'react';



import Controls from '../Controls/Controls.jsx';
import AccountChats from '../AccountChats/AccountChats.jsx';
import Account from '../Account/Account.jsx';
import Chats from '../Chats/Chats.jsx';
import ChatField from '../ChatField/ChatField.jsx';


const account = {
    name: 'Ivan',
    surname: 'Ivanov',
    avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
    contacts: [
        {
            id: 'cont_0',
            name: 'John',
            surname: 'Doe',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            citation: 'Hi our deadlines are. Hi our deadlines are... Hi our deadlines are.....',
        },
        {
            id: 'cont_1',
            name: 'Smith',
            surname: 'Agent',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
            citation: 'You hear that, Mr. Anderson?',
        },
        {
            id: 'cont_2',
            name: 'Morpheus',
            surname: '',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
            citation: 'Everything begins with choice.',
        },
        
    ],
}


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
        const {chatInfo} = this.props;
        // const opponent = account.contacts.find(opp => opp.id === opponentId);        
        
        return (            
            <div className="layout">
                <Controls />
                {/* <AccountChats account = {account} /> */}
                <div className="layout__account-chatlist">
                    <Account userName={account.name} avatarUrl={account.avatarUrl} />
                    <Chats contacts={account.contacts} />                
                </div>
                <ChatField chatInfo={(chatInfo)? chatInfo : {title: 'Vasya'}} />
            </div>
        )
    }
}





