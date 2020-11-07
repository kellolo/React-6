export const SEND_MESSAGE = '@@messages/SEND_MESSAGE';

export const sendMessage = (id, sender, text, chatId) => ({
    type: SEND_MESSAGE,
    id,    
    sender,
    text,
    chatId,
});