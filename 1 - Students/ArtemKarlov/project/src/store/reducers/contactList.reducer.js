import update from 'react-addons-update';
import {DEL_CONTACTLIST_ITEM, CREATE_CONTACT_LIST} from '../actions/contactList.actions.js';
import {SUCCESS_ACCOUNT_LOADING} from '../actions/account.actions.js';

const initStore = {
    contactList: [
        
    ],
    isContactListLoaded: false,
    isContactListLoading: false,
};

export default (store = initStore, action) => {
    switch(action.type) {

        case SUCCESS_ACCOUNT_LOADING: {
            // console.log(action.payload);
            return update(store, {
                contactList: {
                    $set: action.payload.data.contactList
                }
            });
        }

        case CREATE_CONTACT_LIST: {
            const {contactList} = action;
            console.log(action);
            return update(store, {
                contactList: {
                    $set: contactList                    
                },
                isContactListCreated: {$set: true}
            });
        }

        case DEL_CONTACTLIST_ITEM: {
            const {id} = action;
            const delIndex = store.contactList.findIndex((contact) => contact.id === id);
            return update(store, {
                contactList: {
                    $splice: [[delIndex, 1]]
                }
            });
        }

        default:
            return store;
    }
}
