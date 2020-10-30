
import React, { Component, Fragment } from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Messages from '../Messages/Messages';
import ChatList from '../ChatList/ChatList';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: ['Alexandra', 'Michael', 'Ivan'],
            // selectedChat: 1,
        }
    }

    selectHandler = (newSelectedElement) => {
        console.log('selectHandler');

        this.setState({
            selectedChat: newSelectedElement 
        });
    }

    componentDidUpdate () {
        console.log('update');
    }
    
    render() {
        return (
            <Fragment>
            <div className="Layout">
                <Header chatName={this.props.chatName} selected={this.state.selectedChat}/>
                <div className="msgWrapper">
                    <ChatList 
                        contacts={this.state.contactList}
                        // onSelect={this.selectHandler}
                        // selected={this.state.selectedChat}
                        // addChat={this.addChat}
                        />
                    <Messages 
                        />
                </div>
            </div>
        </Fragment>
        )
    }
}



