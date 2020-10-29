export let SEND_CHATS = '@@chat/SEND'

export let sendChat = (contact) => ({
    contact, type: SEND_CHATS
})