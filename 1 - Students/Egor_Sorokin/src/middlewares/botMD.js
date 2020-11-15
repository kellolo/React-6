import { SEND_MESSAGE_SUCCESS, sendMessage } from '../store/actions/messages.actions.js'
import { loadChat } from '../store/actions/chat.actions.js'

export default store => next => action => {
    switch (action.type) {
        case SEND_MESSAGE_SUCCESS: {
            if (action.payload.chatId == "c-0" && action.payload.sender == 'u-5') {
                setTimeout(() => {
                    store.dispatch(sendMessage(`/api/sendMessage/${action.payload.chatId}`, "u-0" ,'Hello! I am bot'))
                    return store.dispatch(loadChat(`/api/chat/${action.payload.chatId}`));
                }, 500)
            }
        }
    }
    return next(action)
}