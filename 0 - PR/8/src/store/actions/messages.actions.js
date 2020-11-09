export let SEND_MSG = '@@messages/SEND'
export let MSG_LOAD = '@@messages/LOADED'

export let sendMessage = (text, sender) => ({
    text, sender, type: SEND_MSG
})

export let loadMessages = (messages) => ({ messages, type: MSG_LOAD });