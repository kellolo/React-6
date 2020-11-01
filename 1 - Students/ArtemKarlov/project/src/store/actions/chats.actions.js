export const ADD_CHAT = '@@chats/ADD_CHAT';

export const addChat = (id, title, avatarUrl) => ({
    type: ADD_CHAT,
    id,
    title,
    avatarUrl,
});