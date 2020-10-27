export let NEW_CHAT = '@@chats/NEW'

export let newChat = (contactName) => ({
    contactName, type: NEW_CHAT
})