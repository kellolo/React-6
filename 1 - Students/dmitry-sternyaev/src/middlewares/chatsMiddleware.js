import { ADD_MESSAGE, CHANGE_MESSAGE_STATUS } from "../constants/actionTypes";
import { sendMessage, getSelectedChat, readMessage } from "../actions";
import { changeLastMessage, changeUnreadCount } from "../actions/chatsActions";

export const chatsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const selectedChat = getSelectedChat(store.getState());
      if (
        action.message.userId === action.message.senderId &&
        selectedChat.bot
      ) {
        setTimeout(() => {
          readMessage(action.message)(store.dispatch, store.getState);
        }, 300);
        setTimeout(() => {
          sendMessage(action.message.messageText)(
            store.dispatch,
            store.getState
          );
        }, 600);
      }
      if (
        action.message.userId !== action.message.senderId &&
        action.message.chatId === selectedChat.userId
      ) {
        readMessage(action.message)(store.dispatch, store.getState);
      }
      store.dispatch(changeLastMessage(action.message));
    case CHANGE_MESSAGE_STATUS:
      store.dispatch(changeUnreadCount(action.message.chatId));
  }
  return next(action);
};
