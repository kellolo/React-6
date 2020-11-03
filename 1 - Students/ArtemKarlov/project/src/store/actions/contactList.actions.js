export const DEL_CONTACTLIST_ITEM = '@@contactList/DEL_CONTACTLIST_ITEM';
export const CREATE_CONTACT_LIST = '@@contactList/CREATE_CONTACT_LIST'

export const createContactList = (contactList) => ({
    type: CREATE_CONTACT_LIST,
    contactList,
});

export const delContactListItem = (id) => ({
    type: DEL_CONTACTLIST_ITEM,
    id,
});