import './style.css'
import React, { Fragment } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'
import { Link } from 'react-router-dom'

let ChatList = (props) => {
    let { chats, contacts } = props;
    let chatsArr = chats.map(ch => <li className="list-group-item list-group-item-primary" key = { ch._id }>
        <Link to = { `/chat/${ch._id}` }>{ch.title}</Link>
    </li>)
    return (
        <Fragment>
            <div className="ChatList d-flex flex-column">
                {/* <Link to = "/test/">
                                <a href="#">Test</a>
                            </Link> */}
                <ul className="list-group list-group-flush">
                    { chatsArr }
                </ul>
                <div>
                    <ChatDialog contacts = { contacts }/>
                </div>
            </div>
        </Fragment>
    )
}
export default ChatList