import './style.css';
import React, { Component, Fragment } from 'react';
import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';
import List from '@material-ui/core/List';
import Item from '../ChatListItem/ChatListItem.jsx';

export default class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [ 
                {
                    name: 'John', 
                    messages: 1
                }
            ]
        }
    }

    addChat = (name) => {
        this.setState({
            chats: [...this.state.chats, {
                    name: name,
                    messages: '0 messages',
                }
            ],
        });
        console.log('chat was added to the list');
        
    }

    render() {
        let { chats } = this.state; 

        let linksArr = chats.map((ch, i) =>  
            // <Link to = {`/chat/${ch.id}/`} key = {ch.id}>
                <Item name={ch.name} key= { i }/>
            // </Link>
        )

        return (
            <Fragment>
                <div className="ChatList d-flex flex-column">
                    <List>
                        { linksArr }
                    </List>
                    <div>
                        <ChatsDialog addFunction={ this.addChat }/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
