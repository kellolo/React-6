import React from "react";
import { ScrollPanel } from "primereact/scrollpanel";
import MessageItem from "../../MessageItem/MessageItem.jsx";

export default class ChatMessages extends React.Component {
    scrollToBottom = () => {
        this.lastMessage && this.lastMessage.scrollIntoView({ behavior: "smooth" });
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate(props) {
        const chat = props.chat;
        if (
            chat.userId &&
            !chat.message &&
            chat.messages.length &&
            chat.messages[chat.messages.length - 1].senderId !== chat.userId &&
            chat.bot
        ) {
            props.onBotReply()
        }
        this.scrollToBottom();
    }
    render() {
        const messages = [];
        if (this.props.chat.messages.length) {
            this.props.chat.messages.forEach(message => {
                let justify = "end";
                let severity = "info";
                if (message.senderId === this.props.chat.userId) {
                    justify = "start";
                    severity = "dark";
                }
                messages.push(
                    <div
                        key={message.messageId}
                        ref={(el) => this.lastMessage = el}>
                        <MessageItem
                            message={message}
                            justify={justify}
                            severity={severity}
                        />
                    </div >
                );
            });
        }
        return (
            <ScrollPanel className="p-h-content-s">
                {messages}
            </ScrollPanel>
        );
    }
}   