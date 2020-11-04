import UserService from "./UserService";
import ContactsService from "./ContactsService";
import ChatsService from "./ChatsService";

const userService = new UserService();
const contactsService = new ContactsService();
const chatsService = new ChatsService();

export const signInUser = ({ userId, password }, success, error) => {
  const user = userService.getUser(userId);
  if (!user) {
    error({ userInvalid: true });
    return;
  }
  success(user);
};

export const signOutUser = (userId, success, error) => {
  success();
};

export const getUserContacts = (userId) => {
  return contactsService.getContacts(userId).map((contact) => {
    return { ...userService.getUser(contact.contId) };
  });
};

export const getUserChats = (userId) => {
  return chatsService.getChats(userId).map((chat) => {
    const messages = chatsService.getChatMessages(userId, chat.chatId);
    return {
      ...userService.getUser(chat.chatId),
      message: chat.message,
      messages: messages,
      lastMessage: messages.length
        ? messages[messages.length - 1].messageText
        : "",
      unreadCount: messages.reduce(
        (count, message) =>
          message.senderId === message.chatId && message.status === "SENT"
            ? ++count
            : count,
        0
      ),
    };
  });
};

export const getUserChat = (userId, chatId) => {
  const chat = chatsService.getChat(userId, chatId);
  return {
    ...userService.getUser(chat.chatId),
    message: chat.message,
    messages: chatsService.getChatMessages(userId, chatId),
  };
};

export const createUserChat = (userId, chatId, success, error) => {
  const chat = chatsService.createChat(userId, chatId);
  if (!chat) {
    error();
    return;
  }
  success({
    ...userService.getUser(chat.chatId),
    message: chat.message,
    messages: [],
  });
};

export const updateUserChatMessage = (
  userId,
  chatId,
  message,
  success,
  error
) => {
  const chat = chatsService.updateChatMessage(userId, chatId, message);
  if (!chat) {
    error();
    return;
  }
  success({
    ...userService.getUser(chat.chatId),
    message: chat.message,
    messages: chatsService.getChatMessages(userId, chatId),
  });
};

export const createUserChatMessage = (
  userId,
  chatId,
  messageText,
  senderId,
  success,
  error
) => {
  const message = chatsService.createChatMessage(
    "",
    userId,
    chatId,
    messageText,
    senderId
  );
  if (!message) {
    error();
    return;
  }
  chatsService.createChatMessage(
    message.messageId,
    chatId,
    userId,
    messageText,
    senderId
  );
  success(message);
};

export const deleteUserChatMessages = (userId, chatId, success, error) => {
  chatsService.deleteChatMessages(userId, chatId);
  success({
    severity: "success",
    summary: "Success",
    detail: "Chat cleared",
  });
};

export const deleteUserChat = (userId, chatId, success, error) => {
  chatsService.deleteChat(userId, chatId);
  success({
    severity: "success",
    summary: "Success",
    detail: "Chat deleted",
  });
};

export const deleteUserChatMessage = (
  userId,
  chatId,
  messageId,
  success,
  error
) => {
  chatsService.deleteChatMessage(userId, chatId, messageId);
  success({
    severity: "success",
    summary: "Success",
    detail: "Message deleted",
  });
};

export const updateUserChatMessageStatus = (
  userId,
  chatId,
  messageId,
  status,
  success,
  error
) => {
  chatsService.updateChatMessageStatus(userId, chatId, messageId, status);
  chatsService.updateChatMessageStatus(chatId, userId, messageId, status);
  success();
};
