import update from 'react-addons-update'
import { SEND_MESSAGE } from "../actions/messages.actions.js";
import { MESSAGES_INIT } from "../actions/messages.actions.js";
import { MESSAGES_CLEAR } from "../actions/messages.actions.js";

const storeMessages = {
    conversations: [
        {
            id: "c-0",
            userId: "u-0",
            messages: ["m-0", "m-1"]
        },
        {
            id: "c-1",
            userId: "u-1",
            messages: ["m-2"]
        },
        {
            id: "c-2",
            userId: "u-2",
            messages: ["m-3"]
        },
    ],
    messages: [
        {
            id: "m-0",
            sender: "u-0",
            text: "Hello"
        },
        {
            id: "m-1",
            sender: "u-0",
            text: "How are you?"
        },
        {
            id: "m-2",
            sender: "u-1",
            text: "Hello!"
        },
        {
            id: "m-3",
            sender: "u-2",
            text: "Hello!"
        },
    ]
}

export default (store = storeMessages, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageId = 'm-' + (Number(store.messages.reduce((res, item) => {
                return (Math.max(res, item.id.slice(2)));
            }, 0)) + 1);
            const thisConversation = store.conversations.findIndex(item => action.chatId == item.id ) 
            if (thisConversation == -1) {
                return update(store, {
                    conversations: { $push: [ {
                        id: action.chatId,
                        userId: store.conversations[action.chatId].userId,
                        messages: [ newMessageId ]
                    }]},
                    messages: { $push: [ {
                        id: newMessageId,
                        sender: action.sender,
                        text: action.text
                    }]}
                });
            } else {
                return update(store, {
                    conversations: { [thisConversation]: { messages: { $push: [
                        newMessageId
                    ] }} },
                    messages: { $push: [ {
                        id: newMessageId,
                        sender: action.sender,
                        text: action.text
                    }]}
                });
            }
        }
        case MESSAGES_INIT: {
            return update(store, {
                conversations: {
                    $push: [{
                    id: action.id,
                    userId: action.userId,
                    messages: [],
                } ]}
            });;
        }
        case MESSAGES_CLEAR: {
            let idToDelete = store.conversations.findIndex(item => item.id == action.id);
            store.conversations.splice(idToDelete, 1)
            return store;
        }
        default:
            return store;
    }
}