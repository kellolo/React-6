import { ADD_CHAT } from '../store/actions/chats.action'

export default store => next => action => {
    switch(action.type) {
        case ADD_CHAT: {
            fetch('/api/chats/u-1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({"chatName": action.title, "chatId": action.id})
            })
             
        }
    }
    return next(action)
}
