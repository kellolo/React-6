import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import UserToolbarItem from "../../User/UserToolbarItem/UserToolbarItem.jsx";

export default class ChatsHeader extends React.Component {

    menuUserItems = [
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-id-card',
            command: this.props.onShowUserProfile
        },
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            disabled: true,
        },
        {
            separator: true
        },
        {
            label: 'Log out',
            icon: 'pi pi-fw pi-power-off',
            disabled: true,
        }
    ]

    render() {
        const leftContents = (
            <React.Fragment>
                {UserToolbarItem(this.props.user, this.props.onShowUserProfile)}
            </React.Fragment>
        );
        const rightContents = (
            <React.Fragment>
                <Button
                    icon="pi pi-comment"
                    tooltip="New chat"
                    onClick={this.props.onShowContactList}
                    className="p-button-rounded p-button-text"
                />
                <Button
                    icon="pi pi-ellipsis-v"
                    tooltip="Menu"
                    onClick={(e) => this.menuUser.toggle(e)}
                    className="p-button-rounded p-button-text"
                />
                <Menu
                    model={this.menuUserItems}
                    ref={el => this.menuUser = el}
                    popup
                />
            </React.Fragment>
        );
        return (
            <Toolbar
                left={leftContents}
                right={rightContents}
                className="p-h-header p-rounded-0"
            />
        );
    }
}