import React from "react";
import { withRouter } from 'react-router-dom';
import { ListBox } from 'primereact/listbox';
import userListItem from "../User/UserListItem/UserListItem.jsx";

class ContactsList extends React.Component {

    handleContactChange = (event) => {
        this.props.history.push(`/chat/${event.value}`);
        this.props.onContactSelect(event.value);
    }

    render() {
        return (
            <ListBox
                id="ContactsList"
                options={this.props.contacts}
                onChange={this.handleContactChange}
                filter
                filterPlaceholder="Search"
                optionLabel="userName"
                optionValue="userId"
                itemTemplate={userListItem}
                className="p-h-content-m p-border-top-0 p-rounded-0"
            />
        );
    }
}

export default withRouter(ContactsList);