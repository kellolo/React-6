import "./style.css";
import React, { Component } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Messages from "../Messages/Messages.jsx";
import ChatList from "../ChatList/ChatList.jsx";
import Header from "../Header/Header.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";
import ContactInfo from '../ContactInfo/ContactInfo.jsx';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <StylesProvider>
        <div className="w-100 d-flex flex-column align-items-center main-opacity">
          <div className="d-flex header">
          <UserInfo className="header__text__blue" />
          <ContactInfo className="header__text__green" chatName={this.props.chatName} />
          </div>
          <div className="d-flex w-100 justify-content-center">
            <ChatList contacts={this.state.contacts} />
            <Messages chatName={this.props.chatName} />
          </div>
        </div>
      </StylesProvider>
    );
  }
}
