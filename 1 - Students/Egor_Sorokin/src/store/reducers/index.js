import { combineReducers } from 'redux'
import chatsReducer from './chats.reducer.js'
import usersReducer from './users.reducer.js'
import messagesReducer from './messages.reducer.js'

import { connectRouter } from 'connected-react-router'

export default history => combineReducers({ chatsReducer, usersReducer, messagesReducer, router: connectRouter(history) })