export const SEND_MESSAGE = '@@messages/SEND_MESSAGE';

export const sendMessage = (text, sender) => ({
    text, sender, type: SEND_MESSAGE
});