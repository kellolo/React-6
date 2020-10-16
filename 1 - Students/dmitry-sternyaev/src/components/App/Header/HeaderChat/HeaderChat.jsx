import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class HeaderChat extends React.Component {
    render() {
        const chat = this.props.chat;
        let chatheader;
        if (chat.userId) {
            chatheader =
                <Form inline className="ml-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" disabled={true} />
                    <Button variant="dark" disabled={true}>Search</Button>
                </Form>;
        }
        return (
            <Navbar variant="dark">
                <Navbar.Brand href={`#` + chat.userId}>{chat.userName}</Navbar.Brand>
                {chatheader}
            </Navbar>
        );
    }
}