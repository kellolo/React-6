import { RSAA, getJSON } from 'redux-api-middleware';

export const ADD_CHAT = '@@chat/ADD_CHAT';

export const START_CHATS_LOADING = '@@chats/START_LOADING';
export const FAIL_CHATS_LOADING = '@@chats/FAIL_LOADING';
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_LOADING';

export const START_CONTACTS_LOADING = '@@contacts/START_LOADING';
export const FAIL_CONTACTS_LOADING = '@@contacts/FAIL_LOADING';
export const SUCCESS_CONTACTS_LOADING = '@@contacts/SUCCESS_LOADING';

export const addChat = (title, id) => {
    return ({
    type: ADD_CHAT,
    title,
    id
 })};

export const loadChats = url => {
    return ({
        [RSAA]: {
            endpoint: url,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // types: [ {/*start*/}, {/*success*/}, {/*fail*/}]
            types: [ START_CHATS_LOADING, 
                {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => {
                    return getJSON(res)
                        .then(data => { return ({ chats: data })})
                    }
                }, 
            FAIL_CHATS_LOADING]  
        }
    })
};

export const loadContacts = url => {
    return ({
        [RSAA]: {
            endpoint: url,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // types: [ {/*start*/}, {/*success*/}, {/*fail*/}]
            types: [ START_CONTACTS_LOADING, 
                {
                type: SUCCESS_CONTACTS_LOADING,
                payload: (action, state, res) => {
                    return getJSON(res)
                        .then(data => { return ({ contacts: data })})
                    }
                }, 
            FAIL_CONTACTS_LOADING]  
        }
    })
}; 