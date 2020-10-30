import React from "react";
import UserCard from "../User/UserCard/UserCard.jsx";

export default class UserProfile extends React.Component {
    render() {
        return ( 
            UserCard(this.props.user)
        );
    }
}
