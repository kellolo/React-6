export let CHANGE_USER = '@@user/CHANGE'

export let sendMessage = (user) => ({
    user, type: CHANGE_USER
})