import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

export default class ChatsHeader extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <Navbar variant="dark">
                <Nav>
                    <Nav.Link className="p-0">
                        <Image className="mr-3" src={user.photo} roundedCircle />
                        <span>{user.name}</span>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}