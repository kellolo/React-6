import './style.css';
import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addChat, loadChats} from '../../store/actions/chats.actions.js';
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

        if (contactId !== null) {      
            const chatId = `chat-${chats.length}`;

            this.props.addChat(chatId, contactId);
            // this.props.delContact(contactId);  //создать контактлист и удалять из него

    
            // this.setState({
            //     chats: [...chats, chat]
            // });
        }
    }

    componentDidMount() {
        this.props.loadChats('api/chats');
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
const mapDispatchToProps = dispatch => bindActionCreators({addChat, delContact, loadChats}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Chats);