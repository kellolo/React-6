import React from "react";
import { withRouter } from 'react-router-dom';
import { ListBox } from 'primereact/listbox';
import userListItem from "../../User/UserListItem/UserListItem.jsx";

class ChatsList extends React.Component {

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
                value={this.props.match.params.chatId}
                options={this.props.chats}
                onChange={this.handleChatChange}
                filter
                filterPlaceholder="Search"
                optionLabel="userName"
                optionValue="userId"
                itemTemplate={userListItem}
                className="p-h-content-m p-rounded-0 p-border-top-0"
            />
        );
    }
}

export default withRouter(ChatsList);