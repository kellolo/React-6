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
import { loadUserInfo } from '../../store/actions/userInfo.actions.js';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let userId = 'user-1';
    this.props.loadUserInfo('/api/userinfo/'+ userId);
  }

  componentDidUpdate() {
  }

  render() {
    let { userInfoRedux, chatsFromRedux } = this.props;
    return (
      <StylesProvider>
        <div className="w-100 d-flex flex-column align-items-center main-opacity">
          <div className="d-flex header">
          <UserInfo className="header__text__blue" chatName={userInfoRedux.name} phone={userInfoRedux.phone} email={userInfoRedux.email} about={userInfoRedux.about}/>
          <ContactInfo className="header__text__green" chatName={chatsFromRedux.name} phone={chatsFromRedux.phone} email={chatsFromRedux.email} about={chatsFromRedux.about}/>
          </div>
          <div className="d-flex w-100 justify-content-center">
            <ChatList />
            <Messages chatName={this.props.chatName} />
          </div>
        </div>
      </StylesProvider>
    );
  }
}

const mapStateToProps = ({ chatsReducer,userInfoReducer  }) => ({
  userInfoRedux: userInfoReducer.information,
  chatsFromRedux: chatsReducer.chats,
});
const mapDispatchToProps = dispatch => bindActionCreators({ loadUserInfo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);