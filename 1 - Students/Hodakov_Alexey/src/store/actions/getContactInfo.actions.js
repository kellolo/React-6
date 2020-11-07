export const GET_CONTACT_INFO = '@@chats/GET_INFO';

export const getContactInfo = (obj,chat) => ({
    type: GET_CONTACT_INFO,
    obj,
    chat,
})