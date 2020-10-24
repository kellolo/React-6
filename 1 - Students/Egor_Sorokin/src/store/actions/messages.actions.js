export const SEND_MESSAGE = '@@messages/SEND_MESSAGE';
export const MESSAGES_INIT = '@@messages/MESSAGES_INIT';

export const sendMessage = (chatId, sender, text) => ({
    type: SEND_MESSAGE,
    chatId,
    sender,
    text,
})

export const messagesInit = (userId) => ({
    type: MESSAGES_INIT,
    userId,
})