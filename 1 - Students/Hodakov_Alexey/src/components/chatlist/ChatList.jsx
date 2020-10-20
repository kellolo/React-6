import "./chatlist.css";

import React, { Component, Fragment } from "react";
import ChatDialog from "../ChatDialog/ChatDialog.jsx";

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let contactList = ["Ivanych", "Stepan", "Alekseyich"];
    return (
      <Fragment>
        <div className="chat__list d-flex flex-column">
          <ul>
            <li>
              <a href="">Chat 1</a>
            </li>
            <li>
              <a href="">Chat 2</a>
            </li>
            <li>
              <a href="">Chat 3</a>
            </li>
          </ul>
          <div>
            <ChatDialog contacts={contactList} />
          </div>
        </div>
      </Fragment>
    );
  }
}
