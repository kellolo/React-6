import './style.css';

import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import {Link} from 'react-router-dom';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';


import ChatListItem from '../ChatListItem/ChatListItem.jsx';


function ChatList(props) {

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleChatListItemClick = (chatId) => {
        setSelectedIndex(chatId);
        props.push(`/chat/${chatId}`);
    };
         
    const { chats } = props;
    
    const chatList = chats.map((chatListItem) => 
        <ChatListItem key={chatListItem.id} selectedIndex={selectedIndex} chat={chatListItem} onClick={handleChatListItemClick}/>
    );
    
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


const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => bindActionCreators({push}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);