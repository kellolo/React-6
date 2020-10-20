import "./ChatMessages.scss";
import React from "react";
import ChatMessage from "./ChatMessage/ChatMessage.jsx";
import { ScrollPanel } from "primereact/scrollpanel";
import { Message } from "primereact/message";

export default class ChatMessages extends React.Component {
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
    }
    render() {
        const messages = [];
        if (this.props.chat.userId) {
            this.props.chat.messages.forEach(message => {
                if (message.senderId === this.props.chat.userId) {
                    messages.push(
                        <div className="p-px-3 p-py-2 p-d-flex p-jc-start" key={message.messageId}>
                            <Message
                                sticky={true}
                                content={ChatMessage(message.messageText)}
                                className="p-message-in"
                            />
                        </div>
                    )
                } else {
                    messages.push(
                        <div className="p-px-3 p-py-2 p-d-flex p-jc-end" key={message.messageId}>
                            <Message
                                sticky={true}
                                content={ChatMessage(message.messageText)}
                                severity="info"
                                className="p-message-out"
                            />
                        </div>
                    )
                }
            });
        } else {
            messages.push(
                <div id="ChatInfo" className="p-d-flex p-ai-center p-jc-center" key={0}>
                    <Message
                        sticky={true}
                        content={ChatMessage("Please select a chat to start messaging")}
                        className="p-message-info"
                    />
                </div>
            );
        }
        return (
            <ScrollPanel id="ChatMessages">
                {messages}
            </ScrollPanel>
        );
    }
}    