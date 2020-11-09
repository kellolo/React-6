
import React, { Component } from 'react';
import './Layout.css';
import Header from '../Header/Header';
import Messages from '../Messages/Messages';
import ChatList from '../ChatList/ChatList';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: ['Alexandra', 'Michael', 'Ivan'],
            selectedChat: 1,
        }
    }

    selectHandler = (newSelectedElement) => {
        this.setState({
            selectedChat: newSelectedElement 
        });
    }

    componentDidUpdate () {
    }

    componentDidMount () {
        if (this.props.chatId) {
            this.setState({
                selectedChat: this.props.chatId
            })
        }
    }
    
    render() {
        return (
            <>
                <div className="main">
                    <div className="Layout">
                        <Header 
                            chatName={this.props.chatName} 
                            selected={this.state.selectedChat} 
                            allChats={this.props.allChats}
                            profile={this.props.isProfile}
                        />
                        <div className="msgWrapper">
                            <ChatList 
                                contacts={this.state.contactList}
                                onSelect={this.selectHandler}
                                selected={this.state.selectedChat}
                                />
                            <Messages />
                        
                        </div>
                    </div>
                </div>
                
                
            </>
        )
    }
}



