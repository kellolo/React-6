import { combineReducers } from 'redux';
import msgReducer from './messages.js';
import chatReducer from './chats';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ msgReducer, chatReducer, router: connectRouter(history) })