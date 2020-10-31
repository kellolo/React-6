import update from "react-addons-update";

import {
  RECEIVE_CHATS,
  ADD_CHAT,
  CHANGE_CHAT,
  EXIT_CHAT,
  CHANGE_MESSAGE,
  ADD_MESSAGE,
  REMOVE_CHAT,
  REMOVE_MESSAGES,
  CHANGE_LAST_MESSAGE,
  REMOVE_MESSAGE,
  CHANGE_MESSAGE_STATUS,
  CHANGE_UNREAD_COUNT,
} from "../constants/actionTypes";

const initStore = {
  chats: [],
  chatId: "",
};

export const chatsReducer = (store = initStore, action) => {
  let chatIndex, messageIndex;
  switch (action.type) {
    case RECEIVE_CHATS:
      return update(store, {
        chats: {
          $set: action.chats,
        },
      });
    case ADD_CHAT:
      return update(store, {
        chats: {
          $push: [action.chat],
        },
      });
    case CHANGE_CHAT:
      return update(store, {
        chatId: {
          $set: action.chatId,
        },
      });
    case EXIT_CHAT:
      return update(store, {
        chatId: {
          $set: "",
        },
      });
    case CHANGE_MESSAGE:
      chatIndex = store.chats.indexOf(
        store.chats.find((chat) => chat.userId === action.chat.userId)
      );
      return update(store, {
        chats: {
          [chatIndex]: {
            message: {
              $set: [action.chat.message],
            },
          },
        },
      });
    case ADD_MESSAGE:
      chatIndex = store.chats.indexOf(
        store.chats.find((chat) => chat.userId === action.message.chatId)
      );
      return update(store, {
        chats: {
          [chatIndex]: {
            messages: {
              $push: [action.message],
            },
          },
        },
      });
    case REMOVE_MESSAGES:
      chatIndex = store.chats.indexOf(
        store.chats.find((chat) => chat.userId === action.chatId)
      );
      return update(store, {
        chats: {
          [chatIndex]: {
            messages: {
              $set: [],
            },
          },
        },
      });
    case REMOVE_CHAT:
      return update(store, {
        chats: {
          $apply: (chats) =>
            chats.filter((chat) => chat.userId !== action.chatId),
        },
      });
    case CHANGE_LAST_MESSAGE:
      chatIndex = store.chats.indexOf(
        store.chats.find((chat) => chat.userId === action.message.chatId)
      );
      return update(store, {
        chats: {
          [chatIndex]: {
            lastMessage: {
              $set: action.message.messageText,
            },
          },
        },
      });
    case REMOVE_MESSAGE:
      chatIndex = store.chats.indexOf(
        store.chats.find((chat) => chat.userId === action.message.chatId)
      );
      return update(store, {
        chats: {
          [chatIndex]: {
            messages: {
              $apply: (messages) =>
                messages.filter(
                  (message) => message.messageId !== action.message.messageId
                ),
            },
          },
        },
      });
    case CHANGE_MESSAGE_STATUS:
      chatIndex = store.chats.indexOf(
        store.chats.find((chat) => chat.userId === action.message.chatId)
      );
      messageIndex = store.chats[chatIndex].messages.indexOf(
        store.chats[chatIndex].messages.find(
          (message) => message.messageId === action.message.messageId
        )
      );
      return update(store, {
        chats: {
          [chatIndex]: {
            messages: {
              [messageIndex]: {
                $set: [action.message],
              },
            },
          },
        },
      });
    case CHANGE_UNREAD_COUNT:
      chatIndex = store.chats.indexOf(
        store.chats.find((chat) => chat.userId === action.chatId)
      );
      const unreadCount = store.chats[chatIndex].messages.reduce(
        (count, message) =>
          message.senderId === message.chatId && message.status === "SENT"
            ? ++count
            : count,
        0
      );
      return update(store, {
        chats: {
          [chatIndex]: {
            unreadCount: {
              $set: unreadCount,
            },
          },
        },
      });
    default:
      return store;
  }
};
