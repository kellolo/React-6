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
} from "../constants/actionTypes.js";

export const receiveChats = (chats) => ({
  type: RECEIVE_CHATS,
  chats,
});

export const addChat = (chat) => ({
  type: ADD_CHAT,
  chat,
});

export const changeChat = (chatId) => ({
  type: CHANGE_CHAT,
  chatId,
});

export const exitChat = () => ({
  type: EXIT_CHAT,
});

export const changeMessage = (chat) => ({
  type: CHANGE_MESSAGE,
  chat,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const removeMessages = (chatId) => ({
  type: REMOVE_MESSAGES,
  chatId,
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  chatId,
});

export const changeLastMessage = (message) => ({
  type: CHANGE_LAST_MESSAGE,
  message,
});

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message,
});

export const changeMessageStatus = (message) => ({
  type: CHANGE_MESSAGE_STATUS,
  message,
});

export const changeUnreadCount = (chatId) => ({
  type: CHANGE_UNREAD_COUNT,
  chatId,
});
