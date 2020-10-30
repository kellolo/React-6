export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (sender, message) => ({
    type: SEND_MESSAGE,
    sender,
    message
 });