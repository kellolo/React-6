import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import UserToolbarItem from "../../User/UserToolbarItem/UserToolbarItem.jsx";

export default class ChatHeader extends React.Component {

    menuContactItems = [
        {
            label: 'Contact info',
            icon: 'pi pi-fw pi-id-card',
            command: this.props.onShowChatProfile
        },
        {
            label: 'Clear messages',
            icon: 'pi pi-fw pi-times',
            disabled: true,
        },
        {
            separator: true
        },
        {
            label: 'Delete chat',
            icon: 'pi pi-fw pi-trash',
            disabled: true,
        }
    ]

    render() {

        let leftContents = (
            <React.Fragment>
                {UserToolbarItem(this.props.chat, this.props.onShowChatProfile)}
            </React.Fragment>
        );

        let rightContents = (
            <React.Fragment>
                <Button
                    icon="pi pi-search"
                    tooltip="Search"
                    disabled={true}
                    className="p-button-rounded p-button-text"
                />
                <Button
                    icon="pi pi-ellipsis-v"
                    tooltip="Menu"
                    onClick={(e) => this.menuContact.toggle(e)}
                    className="p-button-rounded p-button-text"
                />
                <Menu
                    model={this.menuContactItems}
                    ref={el => this.menuContact = el}
                    popup
                />
            </React.Fragment>
        );

        return (
            <Toolbar
                left={leftContents}
                right={rightContents}
                className="p-h-header p-rounded-0 p-border-left-0"
            />
        );

    }
}