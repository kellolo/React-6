import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chats from "../../Chats/Chats.jsx";
import Chat from "../../Chat/Chat.jsx";

export default class Footer extends React.Component {
    handleChatSelect = (userId) => {
        this.props.onChatSelect(userId);
    }
    handleBotReply = () => {
        this.props.onBotReply();
    }
    render() {
        const chats = this.props.chats;
        const chat = this.props.chat;
        return (
            <Container>
                <Row >
                    <Col xs={4} className="vh-100 bg-dark border-right border-secondary py-3 overflow-auto">
                        <Chats chats={chats} onChatSelect={this.handleChatSelect} />
                    </Col>
                    <Col xs={8} className="vh-100 py-3 overflow-auto">
                        <Chat chat={chat} onBotReply={this.handleBotReply} />
                    </Col>
                </Row>
            </Container>
        );
    }
}