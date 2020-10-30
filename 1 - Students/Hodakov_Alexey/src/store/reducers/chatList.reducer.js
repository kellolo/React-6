import update from "react-addons-update";
import { SUCCESSS_CHATS_LOADING } from "../actions/chatList.actions";

const storeChats = {
  chats: [
  ],
};

export default (store = storeChats, action) => {
  switch (action.type) {
    case SUCCESSS_CHATS_LOADING: {
        console.log(action.payload)
    }
    default:
      return store;
  }
};
