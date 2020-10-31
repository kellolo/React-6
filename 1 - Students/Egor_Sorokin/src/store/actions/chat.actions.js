import { RSAA, getJSON } from 'redux-api-middleware'

export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = '@@chat/DELETE_CHAT';

export const START_CHATS_LOADING = '@@/chat/START_CHATS_LOADING'
export const FAIL_CHATS_LOADING = '@@/chat/FAIL_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@/chat/SUCCESS_CHATS_LOADING'

export const addChat = (id, userId, name, avatar) => ({
    type: ADD_CHAT,
    id,
    userId,
    name,
    avatar,
})

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    id,
})

export const loadChats = url => ({
    [RSAA]: {
        endpoint: url, //,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ chats: data }))
            },
            FAIL_CHATS_LOADING]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
});