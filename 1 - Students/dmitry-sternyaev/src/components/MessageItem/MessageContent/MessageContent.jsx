import React from "react";

export default function MessageContent(message) {
    return (
        <React.Fragment>
            <span>{message.messageText}</span>
        </React.Fragment>
    );
}