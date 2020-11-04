import update from "react-addons-update";
import { SUCCESSS_CHATS_ADD_DIALOG } from "../actions/addDialog.actions.js";
import { SUCCESSS_CHATS_LOADING } from "../actions/chats.actions.js";
import { GET_CONTACT_INFO } from '../actions/getContactInfo.actions.js';
import { SUCCESSS_CHATS_DELETE_DIALOG }  from "../actions/deleteDialog.actions.js";

const storeChats = {
  chats: [],
  contactInfo: [],
};

export default (store = storeChats, action) => {
  switch (action.type) {
    case SUCCESSS_CHATS_ADD_DIALOG: {
      // return update(store, {
      //   chats: { $set: action.payload.chats}
      // })
    }
    case SUCCESSS_CHATS_DELETE_DIALOG: {
      return update(store, {
        chats: { $set: action.payload.chats}
      })
    }
    
    case SUCCESSS_CHATS_LOADING: {
      return update(store, {
        chats: { $set: action.payload.chats}
      })
    }

    case GET_CONTACT_INFO:{
      let {obj, chat} = action;
      let item = obj.find(el => el.id === chat)
      return update(store, {
        contactInfo: {$set: item}
      })
    }

    default:
      return store;
  }
};
