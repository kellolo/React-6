import { SEND_MSG, sendMessage } from '../store/actions/messages.actions.js';
import { bindActionCreators } from 'redux';

export default store => next => action => {
    switch(action.type){
        case SEND_MSG: {
            if (action.sender == 'Me'){
                setTimeout(()=>{
                    return store.dispatch(sendMessage('tralalalala', 'Bot'))
                }, 1200)
            }
        }
    }
    return next(action)
}