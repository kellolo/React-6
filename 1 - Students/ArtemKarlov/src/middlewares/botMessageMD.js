import {SEND_MESSAGE, sendMessage} from '../store/actions/messages.actions.js';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const botName = "Bot";
            const botMessage = "The Matrix has you…";
            if ((action.chatId === 'ch_0') && (action.sender !== botName)) {
                const idArr = action.id.split('_');
                idArr[1] = Number(idArr[1]);
                idArr[1]++;
                const msgId = idArr.join('_');
                const chatId = 'ch_0';
                setTimeout(() => {
                    return store.dispatch(sendMessage(msgId, botName, botMessage, chatId));                    
                }, 1000);
            } 
        } 
    }
    return next(action);
}
