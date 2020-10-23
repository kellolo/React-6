import './style.css';
import React, { Fragment } from 'react';

import ChatAdd from '../ChatAdd/ChatAdd.jsx';
import ChatList from '../ChatList/ChatList.jsx';


// ===========================================================================
// временные контанты (наверное нужно будет передавать в props) 
const contacts = [
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
    
];

const contactList = contacts.map((contact) => contact.name);
// ==============================================================================



export default class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           chats: [
            {
                id: "ch_0",
                title: "Ivanov",
                avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
                status: "Hi our deadlines are...",
            },
            {
                id: "ch_1",
                title: "Petrov",
                avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
                status: "Hi our deadlines are...",
            },
            {
                id: "ch_2",
                title: "Sidorov",
                avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
                status: "my life my rules",
            },
           ]
        }
    }

    addChat = (contactName) => {
        const {chats} = this.state;        

        if (contactName !== null) {         

            const chatContact = contacts.find(contact => contact.name === contactName);
    
            const chat = {};
            chat.id = `ch_${chats.length}`;
            chat.title = chatContact.name;
            chat.avatarUrl = chatContact.avatarUrl;
            chat.status = chatContact.citation;
    
            this.setState({
                chats: [...chats, chat]
            });
        }
    }

    componentDidMount() {
      
    }

    componentDidUpdate() {
      
    }

    render() {
         
        const { chats } = this.state;
        
        
        
        return (
            <Fragment>
                <section className="layout__chats chats">
                    <div className="chats__header">
                        <h2 className="chats__title">Chats</h2>
                        <ChatAdd contacts={contactList} getContactName={ this.addChat }/>
                    </div>
                    <ChatList chats={chats} />
                </section>                
            </Fragment>           
        );
    }
}