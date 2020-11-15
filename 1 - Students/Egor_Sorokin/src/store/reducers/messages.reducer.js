import update from 'react-addons-update'
import { SEND_MESSAGE_SUCCESS, MESSAGES_LOAD } from "../actions/messages.actions.js";

const storeMessages = {
    messages: [

    ]
}

export default (store = storeMessages, action) => {
    switch (action.type) {
        // case SEND_MESSAGE_SUCCESS: {
        //     // let newMessageId = 'm-' + (Number(store.messages.reduce((res, item) => {
        //     //     return (Math.max(res, item.id.slice(2)));
        //     // }, 0)) + 1);
        //     // const thisConversation = store.conversations.findIndex(item => action.chatId == item.id ) 
        //     // if (thisConversation == -1) {
        //     //     return update(store, {
        //     //         conversations: { $push: [ {
        //     //             id: action.chatId,
        //     //             userId: store.conversations[action.chatId].userId,
        //     //             messages: [ newMessageId ]
        //     //         }]},
        //     //         messages: { $push: [ {
        //     //             id: newMessageId,
        //     //             sender: action.sender,
        //     //             text: action.text
        //     //         }]}
        //     //     });
        //     // } else {
        //     //     return update(store, {
        //     //         conversations: { [thisConversation]: { messages: { $push: [
        //     //             newMessageId
        //     //         ] }} },
        //     //         messages: { $push: [ {
        //     //             id: newMessageId,
        //     //             sender: action.sender,
        //     //             text: action.text
        //     //         }]}
        //     //     });
        //     // }
        //     return store;
        // }
        
        case MESSAGES_LOAD: {
            let { messages } = action;
            return update(store, { messages: { $set: messages }})
        }
        default:
            return store;
    }
}