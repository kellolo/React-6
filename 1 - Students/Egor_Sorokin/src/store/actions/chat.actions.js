export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = '@@chat/DELETE_CHAT';

export const addChat = (id, userId, name, avatar) => ({
    type: ADD_CHAT,
    id,
    userId,
    name,
    avatar,
})

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    id,
})