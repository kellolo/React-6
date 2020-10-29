export const SEND_MESSAGE = '@@messages/SEND_MESSAGE';

export const sendMessage = (messageId, sender, text) => ({
    type: SEND_MESSAGE,
    messageId,
    sender,
    text,
});