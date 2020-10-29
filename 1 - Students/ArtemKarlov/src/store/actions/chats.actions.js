export const ADD_CHAT = '@@chats/ADD_CHAT';

export const addChat = (chatId, title, avatarUrl, status) => ({
    type: ADD_CHAT,
    chatId,
    title,
    avatarUrl,
    status,
});