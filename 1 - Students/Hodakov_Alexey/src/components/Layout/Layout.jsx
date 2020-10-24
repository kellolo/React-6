
import './style.css'
import React, { Component } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Messages from '../Messages/Messages.jsx'
import ChatList from '../ChatList/ChatList.jsx'
import Header from '../Header/Header.jsx'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentDidMount() {
    }
    
    componentDidUpdate() {
        
    }

    render() {  
                 
        return (
                <StylesProvider>
                    <div className="w-100 d-flex flex-column align-items-center">
                        <Header chatName={this.props.chatName} />
                        <div className="d-flex w-100 justify-content-center">
                            <ChatList contacts = { this.state.contacts } />
                            <Messages chatName={this.props.chatName} />
                        </div>
                    </div>
                </StylesProvider>
        )
    }
}
