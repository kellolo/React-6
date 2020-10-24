import { combineReducers } from 'redux';
import chatsReducer from './chats.reducer.js';
import messagesReducer from './messages.reducer.js';
import contactsReducer from './contacts.reducer.js';


export default combineReducers({ chatsReducer, messagesReducer, contactsReducer })