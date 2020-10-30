import "./style.css";
import React, { Component } from "react";
import Message from "../Message/Message.jsx";
import ChatInput from "../ChatInput/ChatInput.jsx";
import {sendMessage} from "../../store/actions/messages.actions.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  send = (txt) => {
    this.props.sendMessage(txt, 'Me')
  };

  componentDidMount() {
    this.scrollDown();
  }

  componentDidUpdate() {
    this.scrollDown();
  }
  scrollDown = () => {
    this.scrollPointer.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    let { messagesFromRedux, chatName } = this.props;
    let messagesArray = "";

    if (this.props.chatName != undefined) {
      messagesArray = messagesFromRedux.map((msg, i) => (
        <Message  sender = { msg.sender === 'Me' ? msg.sender : chatName } text={msg.text} key={i} />
      ));
    } else {
      messagesArray = "Выберете себе собеседника!";
    }

    return (
      <div className="d-flex flex-column align-items-center messages__wrap">
        <div className="message__text">
          {messagesArray}
          <div
            ref={(el) => {
              this.scrollPointer = el;
            }}
          ></div>
        </div>
        <ChatInput send={this.send} />
      </div>
    );
  }
}
const mapStateToProps = ({ messagesReducer }) => ({
  messagesFromRedux: messagesReducer.messages,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators( { sendMessage }, dispatch );

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
