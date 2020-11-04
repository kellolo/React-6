import update from 'react-addons-update';

import { SEND_MSG } from '../actions/messages.action.js';

const storeMsg = {
    messages: [
        {sender: 'Bot', text: 'Приветик)'},
        {sender: 'Bot', text: 'Как дела?'},
        {sender: 'Bot', text: 'Вау, круто'},
    ]
}

export default (store = storeMsg, action) => {
    switch(action.type) {
        case SEND_MSG: {
            let { text, sender } = action;
            let newMsg = { text, sender };
            return update(store, { messages: { $push: [ newMsg ] } })
        }
        default:
            return store;
    }
};