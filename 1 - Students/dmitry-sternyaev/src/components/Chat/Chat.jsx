import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ChatMessage from "./ChatMessage/ChatMessage.jsx";

export default class Chat extends React.Component {
    componentDidUpdate(props) {
        const chat = props.chat;
        if (
            chat.userId &&
            !chat.message &&
            chat.messages &&
            chat.messages[chat.messages.length - 1].userId !== chat.userId
        ) {
            props.onBotReply()
        }
    }
    render() {
        const messages = [];
        if (this.props.chat.userId) {
            this.props.chat.messages.forEach(message => {
                if (message.userId === this.props.chat.userId) {
                    messages.push(
                        <Row className="justify-content-start" key={message.id}>
                            <ChatMessage message={message} variant="secondary" />
                        </Row>
                    )
                } else {
                    messages.push(
                        <Row className="justify-content-end" key={message.id}>
                            <ChatMessage message={message} variant="primary" />
                        </Row>
                    )
                }
            });
        } else {
            messages.push(
                <Row className="h-100 justify-content-center align-items-center" key={0}>
                    <ChatMessage
                        message={{
                            text: "Please select a chat to start messaging"
                        }}
                        variant="dark"
                    />
                </Row>
            )
        }
        return (
            <Container className="h-100">{messages}</Container>
        );
    }
}