import update from 'react-addons-update';
import {ADD_CHAT} from '../actions/chats.actions.js';

const initStore = {
    chats: [
        {
            id: "ch_0",
            title: "BOT",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
        },
    ]
}

export default (store = initStore, action) => {
    switch(action.type) {
        case ADD_CHAT: {
            const {id, title, avatarUrl} = action;
            const newChat = {id, title, avatarUrl};
            return update(store, {
                chats: {
                    $push: [newChat]
                }
            });
        }
        default:
            return store;
    }
}