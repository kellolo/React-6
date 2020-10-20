import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Content from "./Content/Content.jsx"

export default class App extends React.Component {
  state = {
    user: {
      id: "1",
      photo: "https://placeimg.com/40/40/people",
      name: "User1"
    },
    chats: [
      {
        userId: "2",
        userPhoto: "https://placeimg.com/40/40/animal",
        userName: "Bot1",
        messages: [
          {
            id: "1",
            userId: "1",
            text: "Hello, Bot!"
          }, {
            id: "2",
            userId: "2",
            text: "Hello, User!"
          }
        ],
        message: ""
      }
    ],
    chat: {}
  };
  handleChatSelect = (userId) => {
    this.setState({
      chat: this.state.chats.find((chat) => chat.userId === userId)
    });
  }
  handleMessageChange = (message) => {
    this.setState(state => {
      let chat = state.chat;
      chat.message = message;
      return {
        chat: chat
      };
    });
  }
  handleMessageSend = () => {
    this.setState(state => {
      let chat = state.chat;
      if (chat.message) {
        chat.messages.push({
          id: chat.messages ? +chat.messages[chat.messages.length - 1].id + 1 + "" : "1",
          userId: state.user.id,
          text: state.chat.message
        });
        chat.message = "";
      }
      return {
        chat: chat
      };
    });
  }
  handleBotReply = () => {
    console.log(1);
    setTimeout(() => this.setState(state => {
      let chat = state.chat;
      if (chat.messages[chat.messages.length - 1].userId !== chat.userId) {
        chat.messages.push({
          id: +chat.messages[chat.messages.length - 1].id + 1 + "",
          userId: state.chat.userId,
          text: "Fine, thnx!"
        });
      }
      return {
        chat: chat
      };      
    }), 1000);
  }
  render() {
    return (
      <Container>
        <Row className="fixed-top">
          <Header chat={this.state.chat} />
        </Row>
        <Row className="my-5">
          <Content
            chats={this.state.chats}
            chat={this.state.chat}
            onChatSelect={this.handleChatSelect}
            onBotReply={this.handleBotReply}
          />
        </Row>
        <Row className="fixed-bottom">
          <Footer
            user={this.state.user}
            chat={this.state.chat}
            onMessageChange={this.handleMessageChange}
            onMessageSend={this.handleMessageSend}
          />
        </Row>
      </Container>
    );
  }
}
