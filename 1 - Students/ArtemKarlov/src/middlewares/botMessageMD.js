import {SEND_MESSAGE, sendMessage} from '../store/actions/messages.actions.js';

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const botName = "Bot";
            const botMessage = "The Matrix has you…";
            if (action.sender !== botName) {
                const idArr = action.id.split('_');
                idArr[1] = Number(idArr[1]);
                idArr[1]++;
                const msgId = idArr.join('_');
                setTimeout(() => {
                    return store.dispatch(sendMessage(msgId, botName, botMessage));
                    // console.log(store.getState().messagesReducer.messages);
                }, 1000);
            } 
        } 
    }
    return next(action);
}
