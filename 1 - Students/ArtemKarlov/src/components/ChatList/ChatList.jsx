import './style.css';
import React, { Fragment } from 'react';

import ChatListItem from '../ChatListItem/ChatListItem.jsx';


export default (props) => {
         
    const { chats } = props;
    
    const chatList = chats.map((chatListItem, itemIndex) => <ChatListItem key={itemIndex} chat={chatListItem}/>);
    
    return (
        <Fragment>
            <div className="chats__chats-list chats-list">
                <ul>
                    { chatList }
                </ul>
            </div>
        </Fragment>
        
    );
}