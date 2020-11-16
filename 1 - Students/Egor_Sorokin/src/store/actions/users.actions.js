import { RSAA, getJSON } from 'redux-api-middleware'

export const START_USERS_LOADING = '@@/chat/START_USERS_LOADING'
export const FAIL_USERS_LOADING = '@@/chat/FAIL_USERS_LOADING'
export const SUCCESS_USERS_LOADING = '@@/chat/SUCCESS_USERS_LOADING'

export const START_CHANGE_PASSWORD = '@@/chat/START_CHANGE_PASSWORD'
export const FAIL_CHANGE_PASSWORD = '@@/chat/FAIL_CHANGE_PASSWORD'
export const SUCCESS_CHANGE_PASSWORD = '@@/chat/SUCCESS_CHANGE_PASSWORD'

export const loadUsers= url => ({
    [RSAA]: {
        endpoint: url, //,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [START_USERS_LOADING,
            {
                type: SUCCESS_USERS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ users: data }))
            },
            FAIL_USERS_LOADING]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
});

export const changePassword = (url, password) => ({
    [RSAA]: {
        endpoint: url, //,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({password: password}),
        types: [START_CHANGE_PASSWORD,
            {
                type: SUCCESS_CHANGE_PASSWORD,
                payload: (action, state, res) => getJSON(res)
                    .then(data => (data))
            },
            FAIL_CHANGE_PASSWORD]
        // types: [{/*start*/}, {/*success*/}, {/*fail*/}]
    }
})