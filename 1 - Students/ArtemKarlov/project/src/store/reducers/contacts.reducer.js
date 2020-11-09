import update from 'react-addons-update';
import {DEL_CONTACT, SUCCESS_CONTACTS_LOADING} from '../actions/contacts.actions.js';


const initStore = {
    contacts: [
        // {
        //     id: "user-1",
        //     name: "John",
        //     middleName: "",
        //     surname: "Doe",
        //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
        //     email: "JohnDoe@gmail.com",
        //     tel: "+79277654321",
        //     contacts: ["user-2", "user-3", "user-4", "user-5", "user-6"],
        //     chats: ["chatBot-1"],
        // },
        // {
        //     id: "user-2",
        //     name: "Smith",
        //     middleName: "Agent",
        //     surname: "",
        //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2",
        //     email: "Smith@agent.com",
        //     tel: "+79277777777",
        //     contacts: ["user-1", "user-3", "user-4", "user-5", "user-6"],
        //     chats: ["chatBot-2"],
        // },
        // {
        //     id: "user-3",
        //     name: "Morpheus",
        //     middleName: "",
        //     surname: "",
        //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2",
        //     email: "Morpheus@gmail.com",
        //     tel: "+79277654321",
        //     contacts: ["user-1", "user-2", "user-4", "user-5", "user-6"],
        //     chats: ["chatBot-3"],
        // },
        // {
        //     id: "user-4",
        //     name: "John",
        //     middleName: "Herbert",
        //     surname: "Dillinger",
        //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
        //     email: "JohnDillinger@gmail.com",
        //     tel: "+79277654321",
        //     contacts: ["user-1", "user-2", "user-3", "user-5", "user-6"],
        //     chats: ["chatBot-4"],
        // },
        // {
        //     id: "user-5",
        //     name: "Jeffrey",
        //     middleName: "\"The Dude\"",
        //     surname: "Lebowski",
        //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
        //     email: "Dude@gmail.com",
        //     tel: "+79277654321",
        //     contacts: ["user-1", "user-2", "user-3", "user-4", "user-6"],
        //     chats: ["chatBot-5"],
        // },
        // {
        //     id: "user-6",
        //     name: "Rocky",
        //     middleName: "",
        //     surname: "Balboa",
        //     avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
        //     email: "RockyBalboa@gmail.com",
        //     tel: "+79277654321",
        //     contacts: ["user-1", "user-2", "user-4", "user-5"],
        //     chats: ["chatBot-6"],
        // }
    ],
};

export default (store = initStore, action) => {
    switch(action.type) {

        case SUCCESS_CONTACTS_LOADING: {
            // console.log(action.payload);
            return update(store, {
                contacts: {
                    $set: action.payload.contacts
                }
            });
        }

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
