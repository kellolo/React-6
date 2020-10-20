import './style.css'
import React, { Component, Fragment } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'

import { contacts } from '../../moduls/Contacts/Contacts'


class ChatsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-list">
                <button className="button-round button-chat button-pushed"></button>
                <ul>
                    <li>
                        <a href="">Chat 1</a>
                    </li>
                    <li>
                        <a href="">Chat 2</a>
                    </li>
                    <li>
                        <a href="">Chat 3</a>
                    </li>
                </ul>
                <div>
                    <ChatDialog contacts={contacts.emails()}/>
                </div>
            </div>
        )
    }
}

export default ChatsList