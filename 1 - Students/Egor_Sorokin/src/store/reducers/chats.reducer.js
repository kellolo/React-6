import update from 'react-addons-update'
import { ADD_CHAT } from "../actions/chat.actions.js";

const storeChats = {
    chats: [
        {
            id: 0,
            userId: '0',
            name: 'Bot',
            avatar: 'https://via.placeholder.com/70',
        },
        {
            id: 1,
            userId: '1',
            name: 'Bot2',
            avatar: 'https://via.placeholder.com/70/cccc55',
        },
        {
            id: 2,
            userId: '2',
            name: 'Bot3',
            avatar: 'https://via.placeholder.com/70/55cc55',
        }
    ]
}

export default (store = storeChats, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return update(store, {
                chats: 
                        { $push: [{ 
                            id: action.id,
                            userId: action.userId.toString(),
                            name: action.name,
                            avatar: action.avatar,
                        }]}
            });
        }
        default:
            return store;
    }
}