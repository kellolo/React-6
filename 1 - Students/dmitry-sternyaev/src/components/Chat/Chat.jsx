import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader.jsx";
import ChatMessages from "./ChatMessages/ChatMessages.jsx";
import ChatControl from "./ChatControl/ChatControl.jsx";

export default class Chat extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ChatHeader
                    user={this.props.user}
                    contacts={this.props.contacts}
                    chat={this.props.chat}
                    onContactSelect={(cont) => this.props.onContactSelect(cont)}
                />
                <ChatMessages
                    chat={this.props.chat}
                    onBotReply={this.props.onBotReply}
                />
                <ChatControl
                    chat={this.props.chat}
                    onMessageChange={(mesg) => this.props.onMessageChange(mesg)}
                    onMessageSend={this.props.onMessageSend}
                />
            </React.Fragment>
        );
    }
}    