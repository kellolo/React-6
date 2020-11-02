import update from 'react-addons-update';
import {DEL_CONTACT} from '../actions/contacts.actions.js';


const initStore = {
    contacts: [
        {
            id: "u-1",
            name: "John",
            middleName: "",
            surname: "Doe",
            avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
            email: "JohnDoe@gmail.com",
            tel: "+79277654321",
            contacts: ["u-2", "u-3", "u-4", "u-5", "u-6"],
            chats: ["cu-1"],
        },
        {
            id: "u-2",
            name: "Smith",
            middleName: "Agent",
            surname: "",
            avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2",
            email: "Smith@agent.com",
            tel: "+79277777777",
            contacts: ["u-1", "u-3", "u-4", "u-5", "u-6"],
            chats: ["cu-2"],
        },
        {
            id: "u-3",
            name: "Morpheus",
            middleName: "",
            surname: "",
            avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg2",
            email: "Morpheus@gmail.com",
            tel: "+79277654321",
            contacts: ["u-1", "u-2", "u-4", "u-5", "u-6"],
            chats: ["cu-3"],
        },
        {
            id: "u-4",
            name: "John",
            middleName: "Herbert",
            surname: "Dillinger",
            avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
            email: "JohnDillinger@gmail.com",
            tel: "+79277654321",
            contacts: ["u-1", "u-2", "u-3", "u-5", "u-6"],
            chats: ["cu-4"],
        },
        {
            id: "u-5",
            name: "Jeffrey",
            middleName: "\"The Dude\"",
            surname: "Lebowski",
            avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
            email: "Dude@gmail.com",
            tel: "+79277654321",
            contacts: ["u-1", "u-2", "u-3", "u-4", "u-6"],
            chats: ["cu-6"],
        },
        {
            id: "u-6",
            name: "Rocky",
            middleName: "",
            surname: "Balboa",
            avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
            email: "RockyBalboa@gmail.com",
            tel: "+79277654321",
            contacts: ["u-1", "u-2", "u-3", "u-4", "u-5", "u-6"],
            chats: ["cu-6"],
        }
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
