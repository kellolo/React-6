import React from "react";
import ChatsHeader from "./ChatsHeader/ChatsHeader.jsx";
import ChatsList from "./ChatsList/ChatsList.jsx";

export default class Chats extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ChatsHeader
                    user={this.props.user}
                    onShowUserProfile={this.props.onShowUserProfile}
                    onShowContactList={this.props.onShowContactList}
                />
                <ChatsList
                    chats={this.props.chats}
                />
            </React.Fragment>
        );
    }
} 