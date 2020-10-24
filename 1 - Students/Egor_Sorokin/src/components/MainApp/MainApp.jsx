import './style.css'

import React from 'react'

import Messages from '../Messages/Messages.jsx'
import MessagesBlank from '../MessagesBlank/MessagesBlank.jsx'
import ChatList from '../ChatList/ChatList.jsx'

export default props => {

    let { me, myAvatar, chatId } = props;

    let messagesRender = () => {
        if (chatId == '-1') {
            return (<MessagesBlank myAvatar = { myAvatar } />)
        } else {
            return (<Messages author = { me } activeId={ chatId }  />)
        }
    }
        return(
            <main>
                <div className="row">
                    <ChatList author = { me } activeIndex = { chatId } /> 
                    { messagesRender() }
                </div>
            </main>
        )
}