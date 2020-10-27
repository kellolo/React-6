import { SEND_MESSAGE, sendMessage } from '../store/actions/messages.actions.js'

export default store => next => action => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.chatId == 0 && action.sender == 5) {
                setTimeout(() => {
                    return store.dispatch(sendMessage(action.chatId, 0 ,'Hello! I am bot'))
                }, 500)
            }
        }
    }
    return next(action)
}