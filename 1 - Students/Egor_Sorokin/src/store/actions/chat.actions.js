import { RSAA, getJSON } from 'redux-api-middleware'

// export const ADD_CHAT = '@@chat/ADD_CHAT';
// export const DELETE_CHAT = '@@chat/DELETE_CHAT';

export const START_CHATS_LOADING = '@@/chat/START_CHATS_LOADING'
export const FAIL_CHATS_LOADING = '@@/chat/FAIL_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@/chat/SUCCESS_CHATS_LOADING'

export const START_CHAT_LOADING = '@@/chat/START_CHAT_LOADING'
export const FAIL_CHAT_LOADING = '@@/chat/FAIL_CHAT_LOADING'
export const SUCCESS_CHAT_LOADING = '@@/chat/SUCCESS_CHAT_LOADING'

export const START_CHAT_ADD = '@@/chat/START_CHAT_ADD'
export const FAIL_CHAT_ADD = '@@/chat/FAIL_CHAT_ADD'
export const SUCCESS_CHAT_ADD = '@@/chat/SUCCESS_CHAT_ADD'

export const START_DELETE_CHAT = '@@/chat/START_DELETE_CHAT'
export const FAIL_DELETE_CHAT = '@@/chat/FAIL_DELETE_CHAT'
export const SUCCESS_DELETE_CHAT = '@@/chat/SUCCESS_DELETE_CHAT'

// export const addChat = (id, name, avatar) => ({
//     type: ADD_CHAT,
//     id,
//     name,
//     avatar,
// });

export const addChat = (url, myId, userId, userName, avatar) => ({
    [RSAA]: {
        endpoint: url, //,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({myId: myId, userId: userId, title: userName, avatar: avatar}),
        types: [START_CHAT_ADD,
            {
                type: SUCCESS_CHAT_ADD,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ chats: data }))
            },
            FAIL_CHAT_ADD]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
});

export const deleteChat = (url) => ({
    [RSAA]: {
        endpoint: url, //,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        types: [START_DELETE_CHAT,
            {
                type: SUCCESS_DELETE_CHAT,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ chats: data }))
            },
            FAIL_DELETE_CHAT]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
    // type: DELETE_CHAT,
    // id,
});

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

export const loadChat = url => ({
    [RSAA]: {
        endpoint: url, //,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [START_CHAT_LOADING,
            {
                type: SUCCESS_CHAT_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => data)
            },
            FAIL_CHAT_LOADING]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
});