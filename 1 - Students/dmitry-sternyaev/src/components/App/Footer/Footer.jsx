import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterChats from "./FooterChats/FooterChats.jsx";
import FooterChat from "./FooterChat/FooterChat.jsx";

export default class Footer extends React.Component {
    handleMessageChange = (message) => {
        this.props.onMessageChange(message);
    }
    handleMessageSend = () => {
        this.props.onMessageSend();
    }    
    render() {
        const user = this.props.user;
        const chat = this.props.chat;
        return (
            <Container>
                <Row>
                    <Col xs={4} className="bg-dark border-right border-secondary">
                        <FooterChats user={user} />
                    </Col>
                    <Col xs={8} className="bg-dark">
                        <FooterChat 
                            chat={chat} 
                            onMessageChange={this.handleMessageChange} 
                            onMessageSend={this.handleMessageSend}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}