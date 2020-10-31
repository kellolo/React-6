export let SEND_MSG = '@@message/SEND'

export let sendMessage = (text, sender) => ({
    text, sender, type: SEND_MSG
})