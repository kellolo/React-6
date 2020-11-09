
import { SEND_MESSAGE, sendMessage } from '../store/actions/messages.actions.js';

export default store => next => action => {
    switch(action.type) {
        case SEND_MESSAGE: {
            if (action.sender == 'Me') {
                setTimeout(() => {
                    return store.dispatch(sendMessage('Lalala-tralala', 'Bot'))
                }, 500);
            }
        }
    }
    return next(action)
}