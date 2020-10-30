
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
                <div className="p-inputgroup">
                    <InputText
                        ref={(input) => { this.inputMessage = input; }}
                        value={message}
                        placeholder={chat.userId ? 'Write a message...' : ''}
                        disabled={chat.userId ? false : true}
                        onChange={(e) => this.props.onMessageChange(e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') this.props.onMessageSend() }}
                    />
                    <Button
                        icon="pi pi-reply"
                        onClick={(e) => this.props.onMessageSend()}
                        disabled={chat.message ? false : true}
                    />
                </div>
            </React.Fragment>;
        return (
            <Toolbar
                left={leftContents}
                className="p-h-footer p-rounded-0 p-border-left-0"
            />
        );
    }
}