import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addChat} from '../../store/actions/chats.actions.js';
import {delContact} from '../../store/actions/contacts.actions.js';

import ChatAdd from '../ChatAdd/ChatAdd.jsx';
import ChatList from '../ChatList/ChatList.jsx';


class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    addChat = (contactId) => {
        const {chats} = this.props;
        const {contacts} = this.props;        

        if (contactId !== null) {         

            const chatContact = contacts.find(contact => contact.id === contactId);
    
            const chatId = `ch_${chats.length}`;
            const chatTitle = `${chatContact.name} ${chatContact.surname}`;
            const chatAvatarUrl = chatContact.avatarUrl;

            this.props.addChat(chatId, chatTitle, chatAvatarUrl);
            this.props.delContact(contactId);

    
            // this.setState({
            //     chats: [...chats, chat]
            // });
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
      
    }

    render() {         
        const { chats } = this.props;
        const {contacts} = this.props;
        // const contactList = contacts.map((contact) => contact.name);
        
        
        
        return (
            <Fragment>
                <section className="layout__chats chats">
                    <div className="chats__header">
                        <h2 className="chats__title">Chats</h2>
                        <ChatAdd contacts={contacts} getContactId={ this.addChat }/>
                    </div>
                    <ChatList chats={chats} />
                </section>                
            </Fragment>           
        );
    }
}

const mapStateToProps = ({chatsReducer, contactsReducer}) => ({
    chats: chatsReducer.chats,
    contacts: contactsReducer.contacts,
});
const mapDispatchToProps = dispatch => bindActionCreators({addChat, delContact}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chats);