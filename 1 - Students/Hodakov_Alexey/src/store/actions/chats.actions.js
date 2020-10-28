export let ADD_CHAT = '@@chat/ADD_CHAT'

export let addChat = (contact) => ({
    contact, type: ADD_CHAT
})