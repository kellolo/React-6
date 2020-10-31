import update from 'react-addons-update'
import { ADD_CHAT, DELETE_CHAT, SUCCESS_CHATS_LOADING } from "../actions/chat.actions.js";

const storeChats = {
    chats: [
        // {
        //     id: 0,
        //     userId: '0',
        //     name: 'Bot',
        //     avatar: 'https://via.placeholder.com/70',
        // },
        // {
        //     id: 1,
        //     userId: '1',
        //     name: 'User',
        //     avatar: 'https://via.placeholder.com/70/cccc55',
        // },
        // {
        //     id: 2,
        //     userId: '2',
        //     name: 'User2',
        //     avatar: 'https://via.placeholder.com/70/55cc55',
        // }
    ]
}

export default (store = storeChats, action) => {
    switch (action.type) {
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: {$set: action.payload.chats}
            });
        }
        case ADD_CHAT: {
            return update(store, {
                chats: 
                        { $push: [{ 
                            id: action.id,
                            userId: action.userId,
                            name: action.name,
                            avatar: action.avatar,
                        }]}
            });
        }
        case DELETE_CHAT: {
            let itemToDelete = store.chats.findIndex(item => item.id == action.id)
            let newChats = store.chats.slice();
            newChats.splice(itemToDelete, 1)
            return update(store, {
                chats: 
                        {
                            $set: newChats
                        }
            })
        }
        default:
            return store;
    }
}