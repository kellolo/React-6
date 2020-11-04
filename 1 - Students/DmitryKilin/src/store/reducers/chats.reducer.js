import update from 'react-addons-update';
import {NEW_CHAT, SUCCESS_CHATS_LOADING} from "../actions/chats.actions";

const storeChats = {
    chats: [
        // {title: 'Винсент и Джулс', contactName: 'Jules', id: 'ch_1', messageList: ['mes_1', 'mes_2','mes_3', 'mes_4', 'mes_5']},
        // {title: 'Золотые часы', contactName: 'Esmeralda', id: 'ch_2', messageList: ['mes_6', 'mes_7', 'mes_8', 'mes_9']},
        // {title: 'Винсент Вега и жена Марселласа Уоллеса', contactName: 'Vincent', id: 'ch_3', messageList: ['mes_10', 'mes_11', 'mes_12', 'mes_13']},
        // {title: 'empty chat', contactName: '', id: 'ch_4', messageList: []},
    ]
}

export default (store = storeChats, action) => {
    switch (action.type) {
        case NEW_CHAT: {
            let {contactName} = action;
            let newChat = {title: contactName, contactName: contactName, id: 'ch_'.concat(String(store.chats.length+1)), messageList: []}
            return update(store, {chats: { $push: [newChat] } })
        }
        case SUCCESS_CHATS_LOADING: {
            // console.log(action.payload);
            return update(store, {
                chats: { $set: action.payload.chats }
            })
        }
        default:
            return store;
    }
}