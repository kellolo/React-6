import update from 'react-addons-update'
import { SUCCESS_USERS_LOADING } from '../actions/users.actions.js'

const storeUsers = {
    users: [
        // {
        //     id: 0,
        //     name: 'Bot',
        //     avatar: 'https://via.placeholder.com/70',
        // },
        // {
        //     id: 1,
        //     name: 'User',
        //     avatar: 'https://via.placeholder.com/70/cccc55',
        // },
        // {
        //     id: 2,
        //     name: 'User2',
        //     avatar: 'https://via.placeholder.com/70/55cc55',
        // },
        // {
        //     id: 3,
        //     name: 'User3',
        //     avatar: 'https://via.placeholder.com/70/555555',
        // },
        // {
        //     id: 4,
        //     name: 'User4',
        //     avatar: 'https://via.placeholder.com/70/cccccc',
        // },
        // {
        //     id: 5,
        //     name: 'Egor',
        //     avatar: 'https://cdn.pixabay.com/photo/2018/03/09/15/36/wildlife-3211742_960_720.jpg',
        //     email: 'john.appleseed@icloud.com', 
        // }
    ]
}

export default (store = storeUsers, action) => {
    switch (action.type) {
        case SUCCESS_USERS_LOADING: {
            return update(store, {
                users: {$set: action.payload.users}
            });
        }
        default:
            return store;
    }
}