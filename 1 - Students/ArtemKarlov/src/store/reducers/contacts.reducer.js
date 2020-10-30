import update from 'react-addons-update';
import {DEL_CONTACT} from '../actions/contacts.actions.js';


const initStore = {
    contacts: [
        {
            id: 'cont_0',
            name: 'John',
            surname: 'Doe',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            // citation: 'Hi our deadlines are.....',
        },
        {
            id: 'cont_1',
            name: 'Smith',
            surname: 'Agent',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
            citation: 'You hear that, Mr. Anderson?',
        },
        {
            id: 'cont_2',
            name: 'Morpheus',
            surname: '',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
            citation: 'Everything begins with choice.',
        },
        {
            id: 'cont_3',
            name: 'John',
            surname: 'Dillinger',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            citation: 'Dillinger',
        },
        
    ],
};

export default (store = initStore, action) => {
    switch(action.type) {
        case DEL_CONTACT: {
            const {id} = action;
            const delIndex = store.contacts.findIndex((contact) => contact.id === id);
            return update(store, {
                contacts: {
                    $splice: [[delIndex, 1]]
                }
            });
        }
        default:
            return store;
    }
}
