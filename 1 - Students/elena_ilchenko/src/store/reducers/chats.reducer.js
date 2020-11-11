import update from 'react-addons-update';
import { ADD_CHAT } from "../actions/chats.action";
import { SUCCESS_CHATS_LOADING } from "../actions/chats.action";
import { SUCCESS_CONTACTS_LOADING } from "../actions/chats.action";

const storeChats = {
    chats: [],
    contacts: []
}

export default (store = storeChats, action) => {
    switch(action.type) {
        case ADD_CHAT: {
            return update(store, {
                chats: { $merge: {
                    [action.id-1]: {
                        chatName: action.title, chatId: action.id
                } } },  
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: 
                    action.payload.chats }
            })
        }
        case SUCCESS_CONTACTS_LOADING: {
            return update(store, {
                contacts: { $set: 
                    action.payload.contacts }
            })
        }
        default:
            return store;
    }
}