import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, ListGroup } from 'react-bootstrap'

import './style.css'

export default class ChatList extends Component {

    render() {
        let {chatList} = this.props;
        return (
            <>
                <Nav className=" flex-column align-items-start chat-list">
                    <ListGroup variant="flush chat-list-group">
                        { chatList.map( (chat, i) => (
                            <ListGroup.Item key={i}>
                                <Link to={`/chats/${chat.id}`}>
                                    <Nav.Link as="span" >{chat.title}</Nav.Link>
                                </Link>
                            </ListGroup.Item>
                        ) ) }
                    </ListGroup>
                </Nav>
            </>
        )
    }
}