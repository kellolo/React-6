import './style.css';
import React, { Component, Fragment } from 'react';
import ChatDialog from '../ChatDialog/ChatDialog.jsx';
import { Link } from 'react-router-dom';
import { addChat } from '../../store/actions/chats.actions.js'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    addChat = (contact) => {
        this.props.addChat(contact)
        console.log('test')
      };
    
    componentDidMount() {}

    componentDidUpdate() {}

    render() {
        let { chatsFromRedux, contactsFromRedux } = this.props;
        let chatsArr = chatsFromRedux.map(ch => <li key = { ch.id }>
                                            <Link to = { `/chat/${ch.id}` }>{ch.contact}</Link>
                                        </li>)

        return (
            <Fragment>
                <div className="chat__list d-flex flex-column">
                    <ul>
                        { chatsArr }
                    </ul>
                    <div>
                        <ChatDialog contacts = { contactsFromRedux } addChat = { this.addChat } />
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ chatsReducer, contactsReducer }) => ({
    chatsFromRedux: chatsReducer.chats,
    contactsFromRedux: contactsReducer.contacts
});
const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);