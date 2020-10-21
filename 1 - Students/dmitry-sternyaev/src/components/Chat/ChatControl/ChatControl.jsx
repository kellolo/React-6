import "./ChatControl.scss"
import React from "react";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default class ChatControl extends React.Component {
    componentDidUpdate() {
        if (this.props.chat.userId) {
            this.inputMessage.element.focus();
        }
    }
    render() {
        const chat = this.props.chat;
        let message = chat.message;
        if (!chat.userId) {
            message = "";
        }
        let leftContents =
            <React.Fragment>
                <InputText
                    ref={(input) => { this.inputMessage = input; }}
                    id="ChatControlInputText"
                    value={message}
                    placeholder={chat.userId ? 'Write a message...' : ''}
                    disabled={chat.userId ? false : true}
                    onChange={(e) => this.props.onMessageChange(e.target.value)}
                    onKeyPress={(e) => { if (e.key === 'Enter') this.props.onMessageSend() }}
                />
            </React.Fragment>;
        let rightContents =
            <React.Fragment>
                <Button
                    id="ChatControlButtonSend"
                    icon="pi pi-reply"
                    onClick={(e) => this.props.onMessageSend()}
                    disabled={chat.message ? false : true}
                />
            </React.Fragment>;
        return (
            <Toolbar
                id="ChatControl"
                left={leftContents}
                right={rightContents}
            />
        );
    }
}