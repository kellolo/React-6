import update from 'react-addons-update';
import {ADD_CHAT, ERROR_CHATS_LOADING, START_CHATS_LOADING} from '../actions/chats.actions.js';
import {SEND_MESSAGE} from '../actions/messages.actions.js';

import {SUCCESS_CHATS_LOADING} from '../actions/chats.actions.js';

const initStore = {
    chats: [
        // {
        //     id: "c-0",
        //     title: "BOT",
        //     avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
        //     messages: [],
        // },
    ]
}

export default (store = initStore, action) => {
    switch(action.type) {

        case ADD_CHAT: {
            const {id, contacts} = action;
            const newChat = {id, contacts,  messages: []};
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
                        messages: {
                            $push: [id]
                        }
                    }
                }
            });
        }

        case SUCCESS_CHATS_LOADING: {
            // console.log(action.payload);
            return update(store, {
                chats: {
                    $set: action.payload.chats
                }
            })
        }

        case START_CHATS_LOADING: {
        }

        case ERROR_CHATS_LOADING: {
            // console.log(action);
        }

        default:
            return store;
    }
}