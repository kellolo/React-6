
import { combineReducers } from 'redux';
import chatsReducer from './chats.reducer.js';
import messagesReducer from './messages.reducer.js';
import contactsReducer from './contacts.reducer.js';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ chatsReducer, messagesReducer, contactsReducer, router: connectRouter(history) });