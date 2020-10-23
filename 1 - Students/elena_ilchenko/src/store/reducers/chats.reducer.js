import update from 'react-addons-update';
import { ADD_CHAT } from "../actions/chats.action";

const storeChats = {
    chats: [ 
        {
            chatName: 'Chat 1',
            chatId: 1,
        },
        {
            chatName: 'Chat 2',
            chatId: 2,
        },
        {
            chatName: 'Chat 3',
            chatId: 3,
        },
    ]
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
        default:
            return store;
    }
}