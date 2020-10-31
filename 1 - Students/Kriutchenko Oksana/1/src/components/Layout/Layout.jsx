import './style.css';
import React, { Component } from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from '../Header/Header.jsx';
import Messages from '../Messages/Messages.jsx';
import ChatList from '../ChatList/ChatList.jsx';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
                      
        }
    }
    
    componentDidMount() {
       
    }
    
    componentDidUpdate() {
        
    }

    render() {
               
        return (
                <StylesProvider>
                    <div className="layout">
                        <Header chatName={this.props.chatName} />
                        <div className="wrapper">
                            <ChatList contacts = { this.state.contacts } />
                            <Messages chatName={this.props.chatName} />
                        </div>
                    </div>
                    
                </StylesProvider>
        )
    }
}