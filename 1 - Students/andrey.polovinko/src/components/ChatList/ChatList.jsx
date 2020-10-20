import './style.css'
import React, { Fragment } from 'react'
import ChatDialog from '../ChatDialog/ChatDialog.jsx'

let ChatList = (props) => {
    let contactList = ['Ivanych', 'Stepan', 'Alekseyich'];
    return (
        <Fragment>
            <div className="ChatList d-flex justify-content-around">
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
                                <ChatDialog contacts={contactList}/>
                            </div>
                        </div>
        </Fragment>
    )
}
export default ChatList