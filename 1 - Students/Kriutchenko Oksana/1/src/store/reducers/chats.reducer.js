import { SEND_CHATS } from '../actions/chats.action.js';
import update from "react-addons-update";
import { object } from "prop-types";

const storeChats = {
    chats: [
        {
            id: 'chat_1',
            contact: 'Саша'
        },
        {
            id: 'chat_2',
            contact: 'Ваня'
        },
        {
            id: 'chat_3',
            contact: 'Димон'
        },
        {
            id: 'chat_4',
            contact: 'Катя'
        }
    ]
}

export default (store = storeChats, action) => {
    switch(action.type) {
        case SEND_CHATS: {
        /*     let { id, title } = action;
            let newChats = { id, title };
            return update(store, { chats: { $push: [ newChats ] } }) */
            
                let { contact } = action;
                let chekToAdd = store.chats.some( elem => contact === elem.contact )
                if (!chekToAdd){
                  let id = 'chat_'.concat(String(store.chats.length+1));
                  let newChat = {id, contact}
                  return update(store, { chats: { $push: [newChat] } });
                 }
        }
        default:
            return store;
    }
}
