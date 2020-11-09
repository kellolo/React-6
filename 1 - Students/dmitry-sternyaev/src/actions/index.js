import { push } from "connected-react-router";

import {
  signInUser,
  signOutUser,
  getUserChats,
  getUserContacts,
  getUserChat,
  createUserChat,
  updateUserChatMessage,
  createUserChatMessage,
  deleteUserChat,
  deleteUserChatMessages,
  deleteUserChatMessage,
  updateUserChatMessageStatus,
} from "../service/";

import {
  logInError,
  logInSuccess,
  logOutError,
  logOutSuccess,
} from "./userActions";
import { receiveContacts } from "./contactsActions";
import {
  receiveChats,
  addChat,
  changeChat,
  exitChat,
  changeMessage,
  addMessage,
  removeChat,
  removeMessages,
  removeMessage,
  changeMessageStatus,
} from "./chatsActions";
import { setMessage } from "./messageActions";

export const logIn = (userData) => (dispatch) => {
  signInUser(
    userData,
    (user) => {
      dispatch(push(`/${user.userId}/`));
      dispatch(logInSuccess(user));
    },
    (error) => dispatch(logInError(error))
  );
};

export const logOut = () => (dispatch, getState) => {
  const user = getState().userReducer.user;
  signOutUser(
    user.userId,
    () => {
      dispatch(push("/login"));
      dispatch(logOutSuccess());
    },
    (error) => dispatch(logOutError(error))
  );
  dispatch(exitChat());
};

export const loadContacts = () => (dispatch, getState) => {
  const user = getState().userReducer.user;
  dispatch(receiveContacts(getUserContacts(user.userId)));
};

export const loadChats = () => (dispatch, getState) => {
  const user = getState().userReducer.user;
  dispatch(receiveChats(getUserChats(user.userId)));
};

export const getSelectedChat = (state) => {
  const user = state.userReducer.user;
  const chatId = state.chatsReducer.chatId;
  return getUserChat(user.userId, chatId);
};

export const createChat = (chatId) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  createUserChat(
    user.userId,
    chatId,
    (chat) => dispatch(addChat(chat)),
    () => {}
  );
  selectChat(chatId)(dispatch, getState);
};

export const selectChat = (chatId) => (dispatch, getState) => {
  const { router } = getState();
  if (router.location.pathname.includes("chat")) {
    dispatch(push(`./${chatId}`));
  } else {
    dispatch(push(`./chat/${chatId}`));
  }
  dispatch(changeChat(chatId));
  readMessages(chatId)(dispatch, getState);
};

export const unselectChat = () => (dispatch) => {
  dispatch(exitChat());
  dispatch(push("../"));
};

export const inputMessage = (message) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  const chatId = getState().chatsReducer.chatId;
  updateUserChatMessage(
    user.userId,
    chatId,
    message,
    (chat) => dispatch(changeMessage(chat)),
    () => {}
  );
};

export const sendMessage = (replyText) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  const chatId = getState().chatsReducer.chatId;
  createUserChatMessage(
    user.userId,
    chatId,
    replyText ? replyText : getUserChat(user.userId, chatId).message,
    replyText ? chatId : user.userId,
    (message) => {
      dispatch(addMessage(message));
      if (!replyText) inputMessage("")(dispatch, getState);
    },
    () => {}
  );
};

export const clearMessages = (userId) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  const chatId = userId ? userId : getState().chatsReducer.chatId;
  deleteUserChatMessages(
    user.userId,
    chatId,
    (message) => {
      dispatch(removeMessages(chatId));
      dispatch(setMessage(message));
    },
    (message) => dispatch(setMessage(message))
  );
};

export const deleteChat = (userId) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  const chatId = userId ? userId : getState().chatsReducer.chatId;
  deleteUserChat(
    user.userId,
    chatId,
    (message) => {
      if (chatId === getState().chatsReducer.chatId) unselectChat()(dispatch);
      dispatch(removeChat(chatId));
      dispatch(setMessage(message));
    },
    (message) => dispatch(setMessage(message))
  );
};

export const deleteMessage = (chatMessage) => (dispatch) => {
  deleteUserChatMessage(
    chatMessage.userId,
    chatMessage.chatId,
    chatMessage.messageId,
    (message) => {
      dispatch(removeMessage(chatMessage));
      dispatch(setMessage(message));
    },
    (message) => dispatch(setMessage(message))
  );
};

export const readMessage = (message) => (dispatch) => {
  updateUserChatMessageStatus(
    message.userId,
    message.chatId,
    message.messageId,
    "READ",
    () => dispatch(changeMessageStatus(message)),
    () => {}
  );
};

export const readMessages = (chatId) => (dispatch, getState) => {
  const user = getState().userReducer.user;
  const chat = getUserChat(user.userId, chatId);
  chat.messages
    .filter(
      (message) =>
        message.senderId === message.chatId && message.status === "SENT"
    )
    .forEach((message) => readMessage(message)(dispatch));
};
