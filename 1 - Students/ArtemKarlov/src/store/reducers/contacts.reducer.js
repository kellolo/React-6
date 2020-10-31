import update from 'react-addons-update';
import {DEL_CONTACT} from '../actions/contacts.actions.js';


const initStore = {
    contacts: [
        {
            id: 'cont_0',
            name: 'John',
            middleName: '',
            surname: 'Doe',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
        },
        {
            id: 'cont_1',
            name: 'Smith',
            middleName: 'Agent',
            surname: '',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
        },
        {
            id: 'cont_2',
            name: 'Morpheus',
            middleName: '',
            surname: '',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2',
        },
        {
            id: 'cont_3',
            name: 'John',
            middleName: 'Herbert',
            surname: 'Dillinger',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
        },
        {
            id: 'cont_4',
            name: 'Jeffrey',
            middleName: '"The Dude"',
            surname: 'Lebowski',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
        },
        {
            id: 'cont_5',
            name: 'Rocky',
            middleName: '',
            surname: 'Balboa',
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
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
