import "./main.css";
import React from "react";

import Messages from "../messages/Messages.jsx";
import ChatList from "../chatlist/ChatList.jsx";

export default (props) => {
  return (
    <main>
      <Messages />
      <ChatList />
    </main>
  );
};
