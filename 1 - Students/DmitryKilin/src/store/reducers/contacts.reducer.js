import {SUCCESS_CONTACTS_LOADING} from "../actions/contacts.actions.js";
import update from "react-addons-update";

const storeContacts = {
    contacts: [
        // {name: 'Butch', id: 'cn_1', email: 'butch@me.is', avatar: 'butch.jpg'},
        // {name: 'Esmeralda', id: 'cn_2', email: 'esmeralda@me.is', avatar: 'esmeralda.jpg'},
        // {name: 'Jules', id: 'cn_3', email: 'jules@me.is', avatar: 'jules.jpg'},
        // {name: 'Mia', id: 'cn_4', email: 'mia@me.is', avatar: 'mia.jpg'},
        // {name: 'Tarantino', id: 'cn_3', email: 'tarantino@me.is', avatar: 'tarantino.jpg'},
        // {name: 'Vincent', id: 'cn_4', email: 'vincent@me.is', avatar: 'vincent.jpg'},
    ]
}

export default (store = storeContacts, action) => {
    switch (action.type) {
        case SUCCESS_CONTACTS_LOADING: {
            // console.log(action.payload);
            return update(store, {
                contacts: { $set: action.payload.contacts }
            })
        }
        default:
            return store;
    }
}