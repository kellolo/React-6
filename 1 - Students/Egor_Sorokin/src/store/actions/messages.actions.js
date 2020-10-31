export const SEND_MESSAGE = '@@messages/SEND_MESSAGE';
export const MESSAGES_INIT = '@@messages/MESSAGES_INIT';
export const MESSAGES_CLEAR = '@@messages/MESSAGES_CLEAR';

export const sendMessage = (chatId, sender, text) => ({
    type: SEND_MESSAGE,
    chatId,
    sender,
    text,
})

export const messagesInit = (id, userId) => ({
    type: MESSAGES_INIT,
    id,
    userId,
})

export const messagesClear = (id) => ({
    type: MESSAGES_CLEAR,
    id,
})