import update from 'react-addons-update';
import {ADD_CHAT} from '../actions/chats.actions.js';

const initStore = {
    chats: [
        {
            id: "ch_0",
            title: "IvanovI",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            status: "Hi our deadlines are...",
        },
        {
            id: "ch_1",
            title: "PetrovP",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            status: "You: I'm fine",
        },
        {
            id: "ch_2",
            title: "SidorovS",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            status: "sender: last message...",
        },
    ]
}

export default (store = initStore, action) => {
    switch(action.type) {
        case ADD_CHAT: {
            return update(store, {
                chats: {
                    $push: [{
                        id: action.chatId,
                        title: action.title,
                        avatarUrl: action.avatarUrl,
                        status: action.status,
                    }]
                }
            });
        }
        default:
            return store;
    }
}