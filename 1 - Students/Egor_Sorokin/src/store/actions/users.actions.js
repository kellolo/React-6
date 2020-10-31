import { RSAA, getJSON } from 'redux-api-middleware'

export const START_USERS_LOADING = '@@/chat/START_USERS_LOADING'
export const FAIL_USERS_LOADING = '@@/chat/FAIL_USERS_LOADING'
export const SUCCESS_USERS_LOADING = '@@/chat/SUCCESS_USERS_LOADING'

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