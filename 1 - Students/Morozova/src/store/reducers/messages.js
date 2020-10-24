import { SEND_MSG } from '../actions/messages-actions';
import update from 'react-addons-update';

const storeMsg = {
    messages: [
        {
            sender: 'Vasya',
            text: 'Ciao!',
        },
        {
            sender: 'Petr',
            text: 'Hello Redux!',
        },
        {
            sender: null,
            text: 'Privet!',
        },
        {
            sender: 'Ann',
            text: 'Guten tag!',
        }
    ]
}

export default (store = storeMsg, action) => {
    switch(action.type) {
        case SEND_MSG: {
            let { text, sender } = action;
            let newMsg = { text, sender };
            return update(store, { messages: { $push: [newMsg] } })
        }

        default: return store;
    }
}