import update from "react-addons-update";
import { SEND_MSG } from "../actions/messages.actions.js";

const storeMsg = {
  messages: [
    { sender: 'Bot', text: "Привет, Как здоровье !?" },
    { sender: 'Bot', text: "Давно тебя небыло видно ..." },
  ],
};

export default (store = storeMsg, action) => {
  switch (action.type) {
    case SEND_MSG: {
      let { text, sender } = action;
      let newMsg = { text, sender };
      return update(store, { messages: { $push: [newMsg] } });
    }
    default:
      return store;
  }
};

// [
//     {
//         id: 'chat_1',
//         messages: 'Hello! Hower are you?',
//         sender: 'Larry'
//     },
//     {
//         id: 'chat_2',
//         messages: 'Салют!',
//         sender: 'Ваня'
//     },
//     {
//         id: 'chat_3',
//         messages: 'Давно не виделись!',
//         sender: 'Вероника'
//     },
//     {
//         id: 'chat_4',
//         messages: 'Привет! Как сам?',
//         sender: 'Грузин'
//     }
// ]
