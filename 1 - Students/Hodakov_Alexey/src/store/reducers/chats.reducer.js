import update from "react-addons-update";
import { ADD_CHAT } from "../actions/chats.actions.js";
import { object } from "prop-types";

const storeChats = {
  chats: [
    {
      id: "1",
      contact: "Larry",
    },
    {
      id: "2",
      contact: "Ваня",
    },
    {
      id: "3",
      contact: "Вероника",
    },
    {
      id: "4",
      contact: "Грузин",
    },
  ],
};

export default (store = storeChats, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      let { contact } = action;
      let chatId = Object.keys(store.chats).length + 2;
      let newChat = {chatId, contact}
      return update(store, { chats: { $push: [newChat] } });
    }
    default:
      return store;
  }
};
