import "./User.scss";
import React from "react";
import { withRouter } from 'react-router-dom';
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { OverlayPanel } from "primereact/overlaypanel";
import UserData from "./UserData/UserData.jsx";

class User extends React.Component {

    items = [
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            disabled: true,
            command: (e) => { }
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
                <SplitButton
                    label={this.props.user.name}
                    icon="pi pi-user"
                    model={this.items}
                    onClick={(e) => this.op.toggle(e)}
                />
                <OverlayPanel ref={(el) => this.op = el} dismissable>
                    {UserData(this.props.user)}
                </OverlayPanel>
            </React.Fragment>
        );
        const rightContents = (
            <React.Fragment>
                <Button
                    icon="pi pi-comment"
                    tooltip="New chat"
                    onClick={(e) => this.props.history.push("/chat/")}
                />
            </React.Fragment>
        );
        return (
            <Toolbar
                id="User"
                left={leftContents}
                right={rightContents}
            />
        );
    }
}

export default withRouter(User);