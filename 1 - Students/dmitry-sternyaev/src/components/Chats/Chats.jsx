import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ChatsItem from "./ChatsItem/ChatsItem.jsx";

export default class Chats extends React.Component {
    handleSelect = (href) => {
        this.props.onChatSelect(href.substring(1));
    }
    render() {
        const chats = [];
        this.props.chats.forEach(chat => {
            chats.push(
                <ChatsItem chat={chat} key={chat.userId} />
            )
        });
        return (
            <ListGroup onSelect={this.handleSelect}>{chats}</ListGroup>
        );
    }
}