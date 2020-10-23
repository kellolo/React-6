import update from 'react-addons-update';
import { SEND_MESSAGE } from "../actions/messages.actions";

const storeMessages = {
    messages: [
        {sender: 'bot', message: 'привет'},
        {sender: 'bot', message: 'я бот'}
    ]
}

export default (store = storeMessages, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            const id = Object.keys(store.messages).length;
            return update(store, {
                messages: { $merge: { [id]: {
                    sender: action.sender,
                    message: action.message
                } } },
            });
        }
        default:
            return store;
    }
}