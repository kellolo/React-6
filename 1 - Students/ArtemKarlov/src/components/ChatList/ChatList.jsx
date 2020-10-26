import './style.css';
import React, { Fragment } from 'react';
import List from '@material-ui/core/List';

import ChatListItem from '../ChatListItem/ChatListItem.jsx';


export default (props) => {

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
         
    const { chats } = props;
    
    const chatList = chats.map((chatListItem, itemIndex) => <ChatListItem key={itemIndex} index={itemIndex} selectedIndex={selectedIndex} chat={chatListItem} onClick={handleListItemClick}/>);
    
    return (
        <Fragment>
            <div className="chats__chats-list chats-list">
                <List component="nav" aria-label="main mailbox folders">
                    { chatList }
                </List>
            </div>
        </Fragment>        
    );
}