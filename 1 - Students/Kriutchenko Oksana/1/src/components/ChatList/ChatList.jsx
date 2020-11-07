import './style.css';

import React, { Component, Fragment } from 'react';
import ChatDialog from '../ChatDialog/ChatDialog.jsx';
import Avatar from './Avatar/Avatar.jsx'
import { Link } from 'react-router-dom';
import { loadChats } from '../../store/actions/chats.action.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        let userId = 'u-1';
        this.props.loadChats('/api/chats/'+ userId);
    }

    componentDidUpdate() {

    }

    render() {
        let { chatsFromRedux, contactsFromRedux } = this.props;
        let chatsArr = chatsFromRedux.map(ch => <li className="list" key={ch.id}>
            <Avatar text={ch.contact.slice(0, 2)}></Avatar>
            <Link className="link" to={`/chat/${ch.id}`}>{ch.contact}</Link>
        </li>)
        return (
            <Fragment>
                <div className="ChatList d-flex flex-column">
                    {/*   <Link to = "/test/">
                                <a href="#">Test</a>
                            </Link> */}
                    <ul className="ul_list">
                        {chatsArr}
                    </ul>
                    <div>
                        <ChatDialog
                            contacts={contactsFromRedux}
                                /* sendChat={sendChat}
                                select={props.onSelect} */
                                /* chats={chatsFromRedux} */ />
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
const mapDispatchToProps = dispatch => bindActionCreators({ loadChats }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);