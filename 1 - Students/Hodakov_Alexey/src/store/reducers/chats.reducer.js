import update from "react-addons-update";
import { ADD_CHAT } from "../actions/chats.actions.js";
import { SUCCESSS_CHATS_LOADING } from "../actions/chatList.actions.js";
import { object } from "prop-types";

const storeChats = {
  chats: [
    // {
    //   id: 'chat_1',
    //   contact: "Larry",
    // },
    // {
    //   id: "chat_2",
    //   contact: "Ваня",
    // },
    // {
    //   id: "chat_3",
    //   contact: "Вероника",
    // },
    // {
    //   id: "chat_4",
    //   contact: "Грузин",
    // },
  ],
};

// export default (store = storeChats, action) => {
//   switch (action.type) {
//     case ADD_CHAT: {
//       let { contact } = action;
//       let chekToAdd = store.chats.some( elem => contact === elem.contact )
//       if (!chekToAdd){
//         let id = 'chat_'.concat(String(store.chats.length+1));
//         let newChat = {id, contact}
//         return update(store, { chats: { $push: [newChat] } });
//        }
//     }
//     default:
//       return store;
//   }
// };

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
      //break
    }
    
    case SUCCESSS_CHATS_LOADING: {
      // console.log(action.payload);
      return update(store, {
        chats: { $set: action.payload.chats}
      })
    }
    default:
      return store;
  }
};
