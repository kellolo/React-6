import {SUCCESS_ACCOUNT_LOADING} from '../store/actions/account.actions.js';
import {ADD_CHAT} from '../store/actions/chats.actions.js';
import {SEND_MESSAGE, sendMessage} from '../store/actions/messages.actions.js';


export default (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
// console.log(store.getState().contactsReducer.contacts);
// console.log(store.getState().contactListReducer.contactList);
// console.log(store.getState().messagesReducer.messages);
// console.log(store.getState().chatsReducer.chats);


        } 
    }
    return next(action);
}
