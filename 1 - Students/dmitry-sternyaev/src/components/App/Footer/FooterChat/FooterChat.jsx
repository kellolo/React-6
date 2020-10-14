import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class FooterChat extends React.Component {
    handleTextChange = (event) => {
        this.props.onMessageChange(event.target.value);
    }
    handleSendClick = (event) => {
        this.props.onMessageSend();
    }
    render() {
        const chat = this.props.chat;
        let chatfooter;
        if (chat.userId) {
            chatfooter =
                <Form inline className="flex-grow-1">
                    <FormControl
                        type="text"
                        placeholder="Text message"
                        className="mr-sm-2 flex-grow-1"
                        onChange={this.handleTextChange}
                        value={chat.message}
                    />
                    <Button
                        variant="outline-primary"
                        onClick={this.handleSendClick}
                        disabled={!chat.message}
                    >
                        Send
                    </Button>
                </Form>;
        }
        return (
            <Navbar variant="dark">
                {chatfooter}
            </Navbar>
        );
    }
}