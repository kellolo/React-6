import update from 'react-addons-update';
import {ADD_CHAT} from '../actions/chats.actions.js';
import {SEND_MESSAGE} from '../actions/messages.actions.js';

const initStore = {
    chats: [
        {
            id: "ch_0",
            title: "BOT",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            messagesId: [],
        },
    ]
}

export default (store = initStore, action) => {
    switch(action.type) {
        case ADD_CHAT: {
            const {id, title, avatarUrl} = action;
            const newChat = {id, title, avatarUrl,  messagesId: []};
            return update(store, {
                chats: {
                    $push: [newChat]
                }
            });
        }
        case SEND_MESSAGE: {
            const {id, chatId} = action;
            const chatIndex = store.chats.findIndex((ch) => ch.id === chatId);
            return update(store, {
                chats: {
                    [chatIndex]: {
                        messagesId: {
                            $push: [id]
                        }
                    }
                }
            });
        }
        default:
            return store;
    }
}