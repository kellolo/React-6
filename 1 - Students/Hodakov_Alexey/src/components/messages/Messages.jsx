import "./style.css";
import React, { Component } from "react";
import Message from "../Message/Message.jsx";
import ChatInput from "../ChatInput/ChatInput.jsx";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  sendMessage = (txt) => {
    let { messages } = this.state;
    this.setState({
      messages: [...messages, { sender: "Me", text: txt }],
    });
  };

  componentDidMount() {}

  componentDidUpdate() {
    let {messages} = this.state;
    let lastMessage = messages[messages.length - 1]

    if (lastMessage.sender === 'Me') {
        setTimeout(() => this.setState({
            messages: [...this.state.messages, {sender: 'bot', text: 'Интересно ...'}]
        }), 1200)
      }
      this.scrollDown();
  }
  scrollDown = () => {
    this.scrollPointer.scrollIntoView({behavior: 'smooth'})
  } 

  render() {
    let { messagesFromRedux, chatName } = this.props;
    //console.log(this.state.messages)
    let messagesArray = '';
    if (this.props.chatName != undefined){
     messagesArray = messagesFromRedux.map((msg, i) => (
      <Message sender={chatName} text={msg.text} key={i} />
    ));}else{
      messagesArray = 'Выберете себе собеседника!'
    }

    return (
      <div className="d-flex flex-column align-items-center messages__wrap">
        <div className="message__text">
          {messagesArray}
          <div ref={ el => {this.scrollPointer = el} }></div>
        </div>
        <ChatInput send={this.sendMessage} />
      </div>
    );
  }
}
const mapStateToProps = ({ messagesReducer }) => ({
  messagesFromRedux: messagesReducer.messages
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      /*createChat*/
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Messages);