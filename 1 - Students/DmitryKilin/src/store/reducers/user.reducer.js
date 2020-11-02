import update from 'react-addons-update';
import {CHANGE_USER} from "../actions/user.actions.js";

const storeCurrentUser = {
    name: 'Kventin', id: 'cn_5', email: 'kventin@me.is', avatar: 'tarantino.jpg'
}

export default (store = storeCurrentUser, action) => {
    switch (action.type) {
        case CHANGE_USER: {
            return update(store,
                { $set: action.user }
            )
        }
        default:
            return store;
    }
}

// export default (store = storeMessages, action) => {
//     switch (action.type) {
//         case SEND_MSG: {
//             let {text, sender} = action.message;
//             let newMessage = {text, sender, id: 'mes_new'}
//             return update(store, { messages: { $push: [ newMessage ] } })
//         }
//         default:
//             return store;
//     }
// }