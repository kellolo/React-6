import "./Chats.scss";
import React from "react";
import { withRouter } from 'react-router-dom';
import { ListBox } from 'primereact/listbox';
import ChatsItem from "./ChatsItem/ChatsItem.jsx";

class Chats extends React.Component {

    handleChatChange = (event) => {
        if (event.value) {
            this.props.history.push(`/chat/${event.value}`);
        } else {
            this.props.history.push("/chat/");
        }
    }

    render() {
        return (
            <ListBox
                id="Chats"
                value={this.props.match.params.chatId}
                options={this.props.chats}
                onChange={this.handleChatChange}
                filter
                filterPlaceholder="Search"
                optionLabel="userName"
                optionValue="userId"
                itemTemplate={ChatsItem}
            />
        );
    }
}

export default withRouter(Chats);