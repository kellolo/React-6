import update from "react-addons-update";
import { ADD_CHAT } from "../actions/addDialog.actions.js";
import { SUCCESSS_CHATS_LOADING } from "../actions/chats.actions.js";
import { GET_CONTACT_INFO } from '../actions/getContactInfo.actions.js';

const storeChats = {
  chats: [],
  contactInfo: [],
};

export default (store = storeChats, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      let { contact } = action;
      let chekToAdd = store.chats.some((elem) => contact === elem.contact);
      if (!chekToAdd) {
        let id = "chat_".concat(String(store.chats.length + 1));
        let newChat = { id, contact };
        return update(store, { chats: { $push: [newChat] } });
      }
      // break
    }
    
    case SUCCESSS_CHATS_LOADING: {
      return update(store, {
        chats: { $set: action.payload.chats}
      })
    }

    case GET_CONTACT_INFO:{
      let {obj, chat} = action;
      let find = obj.find(el => el.id === chat)
      return update(store, {
        contactInfo: {$set: find}
      })
    }

    default:
      return store;
  }
};
