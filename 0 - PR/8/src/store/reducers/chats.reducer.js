import update from 'react-addons-update';

import { SUCCESS_CHATS_LOADING, SUCCESS_CHAT_LOADING } from '../actions/chats.actions.js';

const storeChats = {
    chats: [],
    activeChat: {}
}

export default (store = storeChats, action) => {
    switch(action.type) {
        case SUCCESS_CHATS_LOADING: {
            // console.log(action.payload);
            return update(store, {
                chats: { $set: action.payload.chats }
            })
        }

        case SUCCESS_CHAT_LOADING: {
            return update(store, {
                activeChat: { $set: action.payload }
            })
        }

        default:
            return store;
    }
}
