export let SEND_CHATS = '@@chats/SEND'

export let sendChatlist = (id, title) => ({
    id, title, type: SEND_CHATS
})