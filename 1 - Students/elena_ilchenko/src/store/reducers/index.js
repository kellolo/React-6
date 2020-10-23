import {combineReducers} from 'redux';
import chatsReducer from './chats.reducer';
import messagesReducer from './messages.reducer';

export default combineReducers({ chatsReducer, messagesReducer })