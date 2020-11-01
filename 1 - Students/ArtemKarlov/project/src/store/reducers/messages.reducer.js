import update from 'react-addons-update';
import {SEND_MESSAGE} from '../actions/messages.actions.js';

const initStore = {
    messages: [
        // {id: 'msg_0', sender: 'Bot', text: 'Wake up, Neo…'},
        // {id: 'msg_1', sender: 'Bot', text: 'Follow the white rabbit.'},
    ]
}

export default (store = initStore, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            const {id, sender, text} = action;
            const newMsg = {id, sender, text};
            return update(store, {
                messages: {
                    $push: [newMsg]
                } 
            });
        }
        default:
            return store;
    }
}