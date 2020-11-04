import "./style.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Messages from "../Messages/Messages.jsx";
import ChatList from "../ChatList/ChatList.jsx";
import Header from "../Header/Header.jsx";
import UserInfo from "../UserInfo/UserInfo.jsx";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";
import { loadUserInfo } from "../../store/actions/userInfo.actions.js";
import { getContactInfo } from "../../store/actions/getContactInfo.actions.js";
import { addDialog } from "../../store/actions/addDialog.actions.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    userId: "user-1",
  };

  componentDidMount() {
    const { chatId, userId } = this.props;
    this.props.loadUserInfo("/api/userinfo/" + userId);
    this.props.getContactInfo(this.props.chatsFromRedux, chatId);
  }

  componentDidUpdate() {}

  render() {
    const { userId, chatName, userInfoRedux, contactInfoRedux } = this.props;

    return (
      <StylesProvider>
        <div className="w-100 d-flex flex-column align-items-center main-opacity">
          <div className="d-flex header">
            <UserInfo
              className="header__text__blue"
              chatName={userInfoRedux.name}
              phone={userInfoRedux.phone}
              email={userInfoRedux.email}
              about={userInfoRedux.about}
            />
            <ContactInfo
              className="header__text__green"
              userId={userId}
              chatName={contactInfoRedux ? contactInfoRedux.contact : "Welcome"}
              phone={
                contactInfoRedux
                  ? contactInfoRedux.Phone
                  : "Данные отсуствуют!!!"
              }
              email={
                contactInfoRedux
                  ? contactInfoRedux.email
                  : "Данные отсуствуют!!!"
              }
              about={
                contactInfoRedux
                  ? contactInfoRedux.about
                  : "Данные отсуствуют!!!"
              }
            />
          </div>
          <div className="d-flex w-100 justify-content-center">
            <ChatList />
            <Messages chatName={chatName} />
          </div>
        </div>
      </StylesProvider>
    );
  }
}

const mapStateToProps = ({ chatsReducer, userInfoReducer }) => ({
  userInfoRedux: userInfoReducer.information,
  chatsFromRedux: chatsReducer.chats,
  contactInfoRedux: chatsReducer.contactInfo,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loadUserInfo, getContactInfo, addDialog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
