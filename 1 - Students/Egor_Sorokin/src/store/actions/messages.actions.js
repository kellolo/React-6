import { RSAA, getJSON } from 'redux-api-middleware'

export const SEND_MESSAGE_START = '@@messages/SEND_MESSAGE_START';
export const SEND_MESSAGE_FAIL = '@@messages/SEND_MESSAGE_FAIL';
export const SEND_MESSAGE_SUCCESS = '@@messages/SEND_MESSAGE_SUCCESS';

export const MESSAGES_LOAD = '@@messages/MESSAGES_LOAD';

// export const sendMessage = (chatId, sender, text) => ({
//     type: SEND_MESSAGE,
//     chatId,
//     sender,
//     text,
// })

export const sendMessage = (url, sender, text) => ({
    [RSAA]: {
        endpoint: url, //,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({sender: sender, text: text}),
        types: [SEND_MESSAGE_START,
            {
                type: SEND_MESSAGE_SUCCESS,
                payload: (action, state, res) => getJSON(res)
                    .then(data => (data))
            },
            SEND_MESSAGE_FAIL]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
});

export let loadMessages = (messages) => ({messages, type: MESSAGES_LOAD});