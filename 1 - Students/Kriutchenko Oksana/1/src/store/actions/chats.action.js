import { object } from 'prop-types';
import { RSAA, getJSON } from 'redux-api-middleware';

export const START_CHATS_LOADING = '@@chats/START_LOADING';
export const FAIL_CHATS_LOADING = '@@chats/FAIL_LOADING';

export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_LOADING';

export const loadChats = url => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [START_CHATS_LOADING, {
            type: SUCCESS_CHATS_LOADING,
            payload: (action, state, res) => getJSON(res) //d => d.json() //from fetch
                        .then(data => ({ chats: data }))
        }, FAIL_CHATS_LOADING]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
});


/* export let SEND_CHATS = '@@chat/SEND_CHATS'

export let sendChat = (contact) => ({
    contact, type: SEND_CHATS
}) */