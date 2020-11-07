import update from 'react-addons-update';

import { SUCCESS_CHATS_LOADING } from '../actions/chats.action.js';

const storeChats = {
    chats: []
}

export default (store = storeChats, action) => {
    switch(action.type) {
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



/* import { SUCCESS_CHATS_LOADING } from '../actions/chats.action.js';
import update from "react-addons-update";
import { object } from "prop-types";

const storeChats = {
    chats: [

    ]
} */
/*
export default (store = storeChats, action) => {
    switch (action.type) {

        case SUCCESS_CHATS_LOADING: {
            /* console.log(action.payload) 
            return update(store, {
                chats: { $set: action.payload.chats }
            })
        }
        /*    case SEND_CHATS: {
           /*     let { id, title } = action;
               let newChats = { id, title };
               return update(store, { chats: { $push: [ newChats ] } }) 
               
                   let { contact } = action;
                   let chekToChat = store.chats.some( elem => contact === elem.contact )
                   if (!chekToChat){
                     let id = 'chat_'.concat(String(store.chats.length+1));
                     let newChat = {id, contact}
                     return update(store, { chats: { $push: [newChat] } });
                    }
           } 
        default:
            return store;
    }
};*/
