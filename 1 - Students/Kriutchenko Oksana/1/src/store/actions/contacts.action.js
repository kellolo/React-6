import { RSAA, getJSON } from 'redux-api-middleware';
export const START_CONTACTS_LOADING = '@@contacts/START_LOADING';
export const FAIL_CONTACTS_LOADING = '@@contacts/FAIL_LOADING';

export const SUCCESS_CONTACTS_LOADING = '@@contacts/SUCCESS_LOADING';


export const loadContacts = url => ({
    [RSAA]: {
        endpoint: url,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [START_CONTACTS_LOADING, {
            type: SUCCESS_CONTACTS_LOADING,
            payload: (action, state, res) => getJSON(res) 
                .then(data => ({ contacts: data }))
        }, FAIL_CONTACTS_LOADING]
        
    }
}); 