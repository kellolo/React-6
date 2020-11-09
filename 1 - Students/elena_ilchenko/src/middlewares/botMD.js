import { SEND_MESSAGE, sendMessage } from '../store/actions/messages.actions'

export default store => next => action => {
    switch(action.type) {
        case SEND_MESSAGE: {
            if(action.sender === 'me') {
                setTimeout(() => {
                    if(store.getState().messagesReducer.messages[store.getState().messagesReducer.messages.length-1].sender === 'me') {
                        return store.dispatch(sendMessage('bot', 'я бот'))
                    }
                }, 1000)
            }
        }
    }
    return next(action)
}
