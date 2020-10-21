import "./App.scss";
import React from "react";
import User from "../User/User.jsx";
import Chats from "../Chats/Chats.jsx";
import Chat from "../Chat/Chat.jsx";
import UserService from "../../service/UserService.js";

export default class App extends React.Component {

  state = {
    user: {},
    contacts: [],
    chats: []
  }

  componentDidMount() {
    let userService = new UserService();
    this.setState({
      user: userService.getUser("1"),
      contacts: userService.getUserContacts("1"),
      chats: userService.getUserChats("1"),
    })
  }

  handleMessageChange = (message) => {
    let chats = this.state.chats;
    const chat = chats.find((chat) => chat.userId == this.props.chatId);
    if (!chat) {
      return;
    }
    chat.message = message;
    this.setState({
      chats: chats
    });
  }

  handleMessageSend = () => {
    let chats = this.state.chats;
    const chat = chats.find((chat) => chat.userId == this.props.chatId);
    if (!chat || !chat.message) {
      return;
    }
    chat.messages.push({
      senderId: this.state.user.userId,
      messageId: chat.messages.length ? +chat.messages[chat.messages.length - 1].messageId + 1 + "" : "1",
      messageText: chat.message
    });
    chat.message = "";
    this.setState({
      chats: chats
    });
  }

  handleBotReply = () => {
    let chats = this.state.chats;
    const chat = chats.find((chat) => chat.userId == this.props.chatId);
    if (!chat || !chat.messages.length) {
      return;
    }
    chat.messages.push({
      senderId: chat.userId,
      messageId: +chat.messages[chat.messages.length - 1].messageId + 1 + "",
      messageText: chat.messages[chat.messages.length - 1].messageText
    });
    setTimeout(() => this.setState({
      chats: chats
    }), 300);
  }

  handleContactSelect = (contact) => {
    let chats = this.state.chats;
    if (chats.find((chat) => chat.userId === contact.userId)) {
      return;
    }
    chats.push({ ...contact, messages: [], message: "" });
    this.setState({
      chats: chats
    });
  }

  render() {

    const chat = this.state.chats.find((chat) => chat.userId == this.props.chatId) || {};

    return (
      <div id="App" className="p-grid p-align-stretch">
        <div id="AppLeft" className="p-col-3 p-p-0">
            <User
              user={this.state.user}
            />
            <Chats
              chats={this.state.chats}
            />
        </div>
        <div id="AppRight" className="p-col-9 p-p-0">
          <Chat
            user={this.state.user}
            contacts={this.state.contacts}
            chat={chat}
            onContactSelect={this.handleContactSelect}
            onMessageChange={this.handleMessageChange}
            onMessageSend={this.handleMessageSend}
            onBotReply={this.handleBotReply}
          />
        </div>
      </div>
    );

  }
}
