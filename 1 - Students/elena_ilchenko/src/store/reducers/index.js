import {combineReducers} from 'redux';
import chatsReducer from './chats.reducer';
import messagesReducer from './messages.reducer';

import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ router: connectRouter(history), chatsReducer, messagesReducer})