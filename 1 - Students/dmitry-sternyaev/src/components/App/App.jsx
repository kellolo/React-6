import React from "react";

import { connect } from "react-redux";

import { loadContacts, loadChats } from "../../actions";
import { setMessage } from "../../actions/messageActions"

import { Toast } from "primereact/toast";

import Chats from "../Chats/Chats.jsx";
import Chat from "../Chat/Chat.jsx";
import InitialContent from "../InitialContent/InitialContent.jsx";

class App extends React.Component {

  componentDidMount() {
    this.props.loadContacts();
    this.props.loadChats();
  }

  componentDidUpdate(prevProps) {
    if (this.props.message) {
      this.toast.show({ ...this.props.message, life: 2000 });
      this.props.setMessage(null);
    }
  }

  render() {
    return (
      <div className="p-grid p-m-0 p-align-stretch p-vh-100" >
        <div className="p-col-3 p-p-0 p-h-100">
          <Chats />
        </div>
        <div className="p-col-9 p-p-0 p-h-100">
          {this.props.chatId ? <Chat /> : InitialContent()}
        </div>
        <Toast ref={(el) => this.toast = el} position="bottom-left" />
      </div>
    );
  }
}

const mapStateToProps = ({ chatsReducer, messageReducer }) => ({
  chatId: chatsReducer.chatId,
  message: messageReducer.message
})

export default connect(
  mapStateToProps,
  { loadContacts, loadChats, setMessage },
)(App);
