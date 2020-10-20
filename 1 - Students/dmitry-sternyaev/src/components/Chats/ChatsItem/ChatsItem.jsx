import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Image from "react-bootstrap/Image";

export default class ChatsItem extends React.Component {
    render() {
        const chat = this.props.chat;
        return (
            <ListGroupItem action href={`#` + chat.userId} variant="dark">
                <Image className="mr-3" src={chat.userPhoto} roundedCircle />
                <span>{chat.userName}</span>
            </ListGroupItem>
        );
    }
}