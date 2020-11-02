export let CHANGE_USER = '@@user/CHANGE'

export let changeUser = (user) => ({
    user, type: CHANGE_USER
})