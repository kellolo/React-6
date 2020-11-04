import update from 'react-addons-update';
import { ADD_CHAT } from "../actions/chats.action";
import { SUCCESS_CHATS_LOADING } from "../actions/chats.action";

const storeChats = {
    chats: []
}

export default (store = storeChats, action) => {
    switch(action.type) {
        case ADD_CHAT: {
            const id = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [id-1]: {
                        chatName: action.title, chatId: id
                } } },  
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: 
                    action.payload.chats }
            })
        }
        default:
            return store;
    }
}