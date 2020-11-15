import update from 'react-addons-update'
import { SUCCESS_CHAT_ADD, SUCCESS_DELETE_CHAT, SUCCESS_CHATS_LOADING , SUCCESS_CHAT_LOADING} from "../actions/chat.actions.js";

const storeChats = {
    chats: [

    ],
    activeChat: {}

}

export default (store = storeChats, action) => {
    switch (action.type) {
        case SUCCESS_CHAT_LOADING: {
            return update(store, {
                activeChat: {$set: action.payload}
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: {$set: action.payload.chats}
            });
        }
        // case SUCCESS_CHAT_ADD: {
        //     // return update(store, {
        //     //     chats: 
        //     //             { $push: [{ 
        //     //                 // id: action.id,
        //     //                 // userId: action.userId,
        //     //                 // name: action.name,
        //     //                 // avatar: action.avatar,
        //     //                 // lastMessage: ''
        //     //                 id: action.id,
        //     //                 title: action.name,
        //     //                 avatar: action.avatar,
        //     //                 lastMessage: 'No message yet',
        //     //             }]}
        //     // });
        //     return update(store, {
        //         chats: {$set: action.payload.chats}
        //     });
        // }
        // case SUCCESS_DELETE_CHAT: {
        //     return update(store, {
        //         chats: {$set: action.payload.chats}
        //     });

        //     let itemToDelete = store.chats.findIndex(item => item.id == action.id)
        //     let newChats = store.chats.slice();
        //     newChats.splice(itemToDelete, 1)
        //     return update(store, {
        //         chats: 
        //                 {
        //                     $set: newChats
        //                 }
        //     })
        // }
        default:
            return store;
    }
}