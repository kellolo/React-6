export let SEND_CHATS = '@@chat/SEND_CHATS'

export let sendChat = (contact) => ({
    contact, type: SEND_CHATS
})