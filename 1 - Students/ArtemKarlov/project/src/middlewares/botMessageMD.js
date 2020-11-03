import {SEND_MESSAGE, sendMessage} from '../store/actions/messages.actions.js';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
// console.log(store.getState().contactListReducer.contactList);
// console.log(store.getState().messagesReducer.messages);

            const {chatId} = action;
            const botName = "Bot";
            const botMessage = "The Matrix has you…";
            if ((chatId === 'chatBot-0') && (action.sender !== botName)) {
                const idArr = action.id.split('-');
                idArr[1] = Number(idArr[1]);
                idArr[1]++;
                const msgId = idArr.join('-');
                
                setTimeout(() => {
                    return store.dispatch(sendMessage(msgId, botName, botMessage, chatId));                    
                }, 1000);
            } 
        } 
    }
    return next(action);
}
