import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addChat, loadChats} from '../../store/actions/chats.actions.js';
import {createContactList, delContactListItem} from '../../store/actions/contactList.actions.js';


import ChatAdd from '../ChatAdd/ChatAdd.jsx';
import ChatList from '../ChatList/ChatList.jsx';


class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    addChat = (contactId) => {
        const {chats, account} = this.props;       

        if (contactId !== null) {      
            const chatId = `chat-${chats.length}`;
            // const contacts = [account.id, contactId];

            this.props.addChat(chatId, contactId);
            this.props.delContactListItem(contactId);  

    
            // this.setState({
            //     chats: [...chats, chat]
            // });
        }
    }

    componentDidMount() {
        const {account} = this.props;
        this.props.loadChats('api/chats/'+ account.id);

        
    }

    componentDidUpdate() {
        if (!this.props.isContactListCreated) { 
            this.props.createContactList([]); 
        }
             
    }

    render() {         
        const { chats } = this.props;
        const {contacts, contactList} = this.props;
        // const contactList = contacts.map((contact) => contact.name);
        
        
        
        return (
            <Fragment>
                <section className="layout__chats chats">
                    <div className="chats__header">
                        <h2 className="chats__title">Chats</h2>
                        <ChatAdd contacts={contactList} getContactId={ this.addChat }/>
                    </div>
                    <ChatList chats={chats} />
                </section>                
            </Fragment>           
        );
    }
}

const mapStateToProps = ({chatsReducer, contactsReducer, accountReducer,contactListReducer}) => ({
    chats: chatsReducer.chats,
    contacts: contactsReducer.contacts,
    account: accountReducer.account,
    contactList: contactListReducer.contactList,
    isContactListCreated: contactListReducer.isContactListCreated,
});
const mapDispatchToProps = dispatch => bindActionCreators({addChat, loadChats, createContactList, delContactListItem}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chats);