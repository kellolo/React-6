import { SEND_MESSAGE } from '../actions/messages.actions.js';
import update from 'react-addons-update';

const storeMessages = {
    messages: [
        { sender: 'Me', text: 'Привет' },
        { sender: 'Bot', text: 'Привет,я бот этого чата' },
        { sender: 'Me', text: 'Привет' },
    ]
}

export default (store = storeMessages, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {

            let { text, sender } = action;
            let newMsg = { text, sender };
            return update(store, { messages: { $push: [ newMsg ] } })
        }

        default:
            return store;
    }
}
