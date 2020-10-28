export let SEND_MSG = '@@messages/SEND'

export let sendMessage = (message) => ({
    message, type: SEND_MSG
})