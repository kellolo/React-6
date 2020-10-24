export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (id, userId, name, avatar) => ({
    type: ADD_CHAT,
    id,
    userId,
    name,
    avatar,
})