import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderChats from "./HeaderChats/HeaderChats.jsx";
import HeaderChat from "./HeaderChat/HeaderChat.jsx";

export default class Header extends React.Component {
    render() {
        const chat = this.props.chat;
        return (
            <Container>
                <Row>
                    <Col xs={4} className="bg-dark border-right border-secondary">
                        <HeaderChats />
                    </Col>
                    <Col xs={8} className="bg-dark">
                        <HeaderChat chat={chat}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}