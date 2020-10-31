import { SEND_MESSAGE, sendMessage } from '../store/actions/messages.actions.js'

export default store => next => action => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.chatId == "c-0" && action.sender == 'u-5') {
                setTimeout(() => {
                    return store.dispatch(sendMessage(action.chatId, "u-0" ,'Hello! I am bot'))
                }, 500)
            }
        }
    }
    return next(action)
}