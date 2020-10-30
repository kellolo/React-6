
import { SEND_MSG, sendMessage } from '../store/actions/messages.action.js';
import { bindActionCreators } from 'redux';

export default store => next => action => {
    switch(action.type) {
        case SEND_MSG: {
            if (action.sender == 'Me') {
                setTimeout(() => {
                    return store.dispatch(sendMessage('Lalala-tralala', 'Bot'))
                }, 500);
            }
        }
    }
    return next(action)
}