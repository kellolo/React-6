import {CREATE_CONTACT_LIST} from '../store/actions/contactList.actions.js';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case CREATE_CONTACT_LIST: {
// console.log(store.getState().contactsReducer.contacts);
// console.log(store.getState().messagesReducer.messages);
            const contacts = store.getState().contactsReducer.contacts;
            const contactList = contacts.map((contact) => {
                const contactListItem = {
                    id: contact.id,
                    name: contact.name,
                    middleName: contact.middleName,
                    surname: contact.surname,
                    avatarUrl: contact.avatarUrl,
                };
                return contactListItem;                
            });

            action.contactList = contactList;
        } 
    }
    return next(action);
}
