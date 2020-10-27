import { SEND_MSG, sendMessage } from '../store/actions/messages.actions.js';

export default store => next => action => {
    switch(action.type) {
        case SEND_MSG: {
            if (action.message.sender !== 'Bot') {
                setTimeout(() => {
                    return store.dispatch(sendMessage({text: 'Lalala-tralala', sender: 'Bot'}))
                }, 500);
            }
        }
    }
    return next(action)
}
