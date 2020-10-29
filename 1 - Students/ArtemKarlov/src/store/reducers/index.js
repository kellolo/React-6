import {combineReducers} from 'redux';
import chatsReducer from './chats.reducer.js';
import messagesReducer from './messages.reducer.js';

export default combineReducers({
    chatsReducer,
    messagesReducer,
})