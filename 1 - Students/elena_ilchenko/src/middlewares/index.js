import { apiMiddleware } from 'redux-api-middleware';
import botMD from './botMD'
import addChatMD from './addChatMD'

export default [ apiMiddleware, botMD, addChatMD]