import "./ChatHeader.scss";
import React from "react";
import { withRouter } from 'react-router-dom';
import { Toolbar } from "primereact/toolbar";
import { AutoComplete } from "primereact/autocomplete";
import { InputText } from "primereact/inputtext";

class ChatHeader extends React.Component {

    state = {
        contact: "",
        message: "",
        filteredContacts: []
    }

    handleContactSelect = (event) => {
        this.setState({
            contact: ""
        });
        this.props.history.push(`/chat/${event.value.userId}`);
        this.props.onContactSelect(event.value);
    }

    handleContactSearch = (event) => {
        let filteredContacts = this.props.contacts.filter((contact) => {
            return contact.userName.toLowerCase().startsWith(event.query.toLowerCase());
        });
        this.setState({ filteredContacts: filteredContacts });
    }

    componentDidUpdate() {
        if (!this.props.chat.userId) {
            this.inputContact.inputEl.focus();
        }
    }

    render() {

        let contact = this.state.contact;

        let rightContents = "";
        if (this.props.chat.userId) {
            contact = this.props.chat.userName;
            rightContents = (
                <React.Fragment>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            value={this.state.message}
                            onChange={(e) => this.setState({ message: e.value })}
                            placeholder="Search"
                            disabled={true}
                        />
                    </span>
                </React.Fragment>
            );
        }

        let leftContents = (
            <React.Fragment>
                <label htmlFor="ChatHeaderUserName" className="p-mr-2 p-mb-0">To:</label>
                <AutoComplete
                    id="ChatHeaderUserName"
                    ref={(input) => { this.inputContact = input; }}
                    value={contact}
                    suggestions={this.state.filteredContacts}
                    completeMethod={this.handleContactSearch}
                    field="userName"
                    placeholder="No recipients"
                    onChange={(e) => this.setState({ contact: e.value })}
                    onSelect={this.handleContactSelect}
                    readonly={this.props.chat.userId ? true : false}
                />
            </React.Fragment>
        );

        return (
            <Toolbar
                left={leftContents}
                right={rightContents}
                id="ChatHeader"
            />
        );
    }
}

export default withRouter(ChatHeader);