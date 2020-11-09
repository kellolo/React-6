import update from 'react-addons-update';

import { SEND_MSG, MSG_LOAD } from '../actions/messages.actions.js';

const storeMsg = {
    messages: [
        {sender: 'Bot', text: '...'},
        {sender: 'Me', text: 'Some text 1'},
        {sender: 'Me', text: 'Some text2'},
        {sender: 'Bot', text: '...'},
    ]
}

export default (store = storeMsg, action) => {
    switch(action.type) {
        case SEND_MSG: {
            let { text, sender } = action;
            let newMsg = { text, sender };
            return update(store, { messages: { $push: [ newMsg ] } })
        }

        case MSG_LOAD: {
            let { messages } = action;
            console.log(messages)
            return update(store, { messages: { $set: messages } })
        }

        default:
            return store;
    }
}
