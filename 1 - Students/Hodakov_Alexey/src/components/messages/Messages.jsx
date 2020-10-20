import "./messages.css";
import React from "react";
import Message from "../message/Message.jsx";
import ChatInput from '../chatInput/ChatInput.jsx'


export default class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { sender: "Bot", text: "Привет, Учитель!" },
        { sender: "Bot", text: "Я, могу подумать над твоими словами ..." },
      ],
      // botAnswer: [
      //   { sender: "Bot", text: "Интересно!" },
      //   { sender: "Bot", text: "Не совсем понимаю тебя..." },
      //   { sender: "Bot", text: "Это наводит меня на размышления." }
      // ],
      // counterAnswer: 0,
    };
  }

  sendMessage = text => {
    let { messages } = this.state;
    this.setState({
      messages: [...messages, { sender: "Me", text: text }],
    });
  };

  componentDidUpdate(){
    let {messages} = this.state;
    let lastMessage = messages[messages.length - 1]

    if (lastMessage.sender === 'Me') {
        setTimeout(() => this.setState({
            messages: [...this.state.messages, {sender: 'bot', text: 'Интересно ...'}]
        }), 1200)
      }
  }
  

  render() {
    let { messages} = this.state;
    let messagesArray = messages.map((msg, i) => (
      <Message sender={msg.sender} text={msg.text} key={i} />
    ));

    return (
      <div className="d-flex flex-column align-items-center messages__wrap">
        <div className="message__text">{messagesArray}</div>
        <ChatInput send = { this.sendMessage }/>
      </div>
    );
  }
}
