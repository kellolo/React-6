import React from "react";
import Alert from "react-bootstrap/Alert";

export default class ChatMessage extends React.Component {
    render() {
        const message = this.props.message;
        const variant = this.props.variant;
        const size = this.props.size;
        return (
            <Alert variant={variant} className={`w-` + size}>{message.text}</Alert>
        );
    }
}