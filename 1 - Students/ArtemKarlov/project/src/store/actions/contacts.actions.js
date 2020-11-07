import {RSAA, getJSON} from 'redux-api-middleware';

export const DEL_CONTACT = '@@contacts/DEL_CONTACT';

export const delContact = (id) => ({
    type: DEL_CONTACT,
    id,
});


export const START_CONTACTS_LOADING = '@@contacts/START_CONTACTS_LOADING';
export const SUCCESS_CONTACTS_LOADING = '@@contacts/SUCCESS_CONTACTS_LOADING';
export const ERROR_CONTACTS_LOADING = '@@contacts/ERROR_CONTACTS_LOADING';

export const loadContacts = (url) => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        types: [
            START_CONTACTS_LOADING,
            {
                type: SUCCESS_CONTACTS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ contacts: data })),
            },
            ERROR_CONTACTS_LOADING,
        ],
    }
});