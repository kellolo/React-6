import React from "react";
import UserCard from "../User/UserCard/UserCard.jsx";

export default class ChatProfile extends React.Component {
    render() {
        return (
            UserCard(this.props.chat)
        );
    }
}
