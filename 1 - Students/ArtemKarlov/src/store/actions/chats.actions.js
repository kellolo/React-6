export const ADD_CHAT = '@@chats/ADD_CHAT';

export const addChat = (id, title, avatarUrl, status) => ({
    type: ADD_CHAT,
    id,
    title,
    avatarUrl,
    status,
});