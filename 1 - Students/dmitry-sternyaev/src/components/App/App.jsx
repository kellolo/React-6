import React from "react";
import { Sidebar } from "primereact/sidebar";
import Chats from "../Chats/Chats.jsx";
import Chat from "../Chat/Chat.jsx";
import ContactList from "../ContactsList/ContactsList.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import ChatProfile from "../ChatProfile/ChatProfile.jsx";
import InitialContent from "../InitialContent/InitialContent.jsx";
import UserService from "../../service/UserService.js";

export default class App extends React.Component {

  state = {
    user: {},
    contacts: [],
    chats: [],
    visibleUserProfile: false,
    visibleContactList: false,
    visibleChatProfile: false,
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

  handleContactSelect = (contactId) => {
    let chats = this.state.chats;
    if (!chats.find((chat) => chat.userId === contactId)) {
      chats.push({
        ...this.state.contacts.find((contact) => contact.userId === contactId),
        messages: [],
        message: ""
      });
    }
    this.setState({
      chats: chats,
      visibleContactList: false
    });
  }

  render() {

    let leftContents =
      <React.Fragment>
        <Sidebar
          baseZIndex={1000000}
          visible={this.state.visibleUserProfile}
          onHide={() => this.setState({ visibleUserProfile: false })}
          className="p-p-0 p-border-0"
        >
          <UserProfile
            user={this.state.user}
          />
        </Sidebar>
        <Sidebar
          baseZIndex={1000000}
          visible={this.state.visibleContactList}
          onHide={() => this.setState({ visibleContactList: false })}
          className="p-p-0 p-border-0"
        >
          <ContactList
            contacts={this.state.contacts}
            onContactSelect={this.handleContactSelect}
          />
        </Sidebar>
        <Chats
          user={this.state.user}
          chats={this.state.chats}
          onShowUserProfile={() => this.setState({ visibleUserProfile: true })}
          onShowContactList={() => this.setState({ visibleContactList: true })}
        />
      </React.Fragment>;

    let rightContents = InitialContent();

    const chat = this.state.chats.find((chat) => chat.userId == this.props.chatId);
    if (chat) {
      rightContents =
        <React.Fragment>
          <Chat
            chat={chat}
            onShowChatProfile={() => this.setState({ visibleChatProfile: true })}
            onMessageChange={this.handleMessageChange}
            onMessageSend={this.handleMessageSend}
            onBotReply={this.handleBotReply}
          />
          <Sidebar
            baseZIndex={1000000}
            position="right"
            visible={this.state.visibleChatProfile}
            onHide={() => this.setState({ visibleChatProfile: false })}
            className="p-p-0 p-border-0"
          >
            <ChatProfile
              chat={chat}
            />
          </Sidebar>
        </React.Fragment>
    }

    return (
      <div className="p-grid p-m-0 p-align-stretch p-vh-100" >
        <div className="p-col-3 p-p-0 p-h-100">
          {leftContents}
        </div>
        <div className="p-col-9 p-p-0 p-h-100">
          {rightContents}
        </div>
      </div>
    );

  }
}
