import './style.css'
import React, { Component } from 'react'

import { Container, Collapse, Navbar, Nav } from 'react-bootstrap'

import ChatList from 'components/ChatList/ChatList'

//import ChatInput from 'components/ChatInput/ChatInput.jsx'
import ChatModal from 'components/ChatModal/ChatModal'

export default class ChatMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let {userList} = this.props;
        
        return (
            <aside className="chat-menu-aside">
                <Navbar collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" bsPrefix="chat-menu-toggler btn btn-light" className="">Чаты</Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
                            <ChatList chatList={this.props.chatList} />
                            <ChatModal userList={userList}/>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </aside>
        )
    }
}