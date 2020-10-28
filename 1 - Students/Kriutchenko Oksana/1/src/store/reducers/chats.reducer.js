import { SEND_CHATS } from '../actions/chats.action.js';

const storeChats = {
    chats: [
        {
            id: 'chat_1',
            title: 'Lorem'
        },
        {
            id: 'chat_2',
            title: 'Ipsum'
        },
        {
            id: 'chat_3',
            title: 'Dolor'
        },
        {
            id: 'chat_4',
            title: 'Set Amet'
        }
    ]
}

export default (store = storeChats, action) => {
    switch(action.type) {
        case SEND_CHATS: {
            let { id, title } = action;
            let newChats = { id, title };
            return update(store, { chats: { $push: [ newChats ] } })
        }
        default:
            return store;
    }
}