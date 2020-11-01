export const DEL_CONTACT = '@@contacts/DEL_CONTACT';

export const delContact = (id) => ({
    type: DEL_CONTACT,
    id,
});