import Chats from "../../public/assets/data/Chats.json";
import ChatsMessages from "../../public/assets/data/ChatsMessages.json";

export default class ChatService {
  chats = Chats.data;
  chatsMessages = ChatsMessages.data;

  getChats(userId) {
    return this.chats.filter((chat) => chat.userId === userId);
  }

  getChat(userId, chatId) {
    return this.chats.find(
      (chat) => chat.userId === userId && chat.chatId === chatId
    );
  }

  getChatMessage(userId, chatId, messageId) {
    return this.chatsMessages.find(
      (chatMessage) =>
        chatMessage.userId === userId &&
        chatMessage.chatId === chatId &&
        chatMessage.messageId === messageId
    );
  }

  getChatMessages(userId, chatId) {
    return this.chatsMessages.filter(
      (chatMessage) =>
        chatMessage.userId === userId && chatMessage.chatId === chatId
    );
  }

  createChat(userId, chatId) {
    if (this.getChat(userId, chatId)) {
      return null;
    }
    const chat = {
      userId: userId,
      chatId: chatId,
      message: "",
    };
    this.chats.push(chat);
    return chat;
  }

  updateChatMessage(userId, chatId, message) {
    let chat = this.getChat(userId, chatId);
    if (!chat) {
      return null;
    }
    chat.message = message;
    return chat;
  }

  createChatMessage(
    messageId,
    userId,
    chatId,
    messageText,
    senderId,
    status = "SENT"
  ) {
    this.createChat(userId, chatId);
    let message = {
      userId: userId,
      chatId: chatId,
      messageId: messageId ? messageId : Date.now().toString(),
      messageText: messageText,
      senderId: senderId,
      status: status,
    };
    this.chatsMessages.push(message);
    return message;
  }

  deleteChatMessages(userId, chatId) {
    this.chatsMessages = this.chatsMessages.filter(
      (chatMessage) =>
        chatMessage.userId !== userId || chatMessage.chatId !== chatId
    );
  }

  deleteChat(userId, chatId) {
    this.deleteChatMessages(userId, chatId);
    this.chats = this.chats.filter(
      (chat) => chat.userId !== userId || chat.chatId !== chatId
    );
  }

  deleteChatMessage(userId, chatId, messageId) {
    this.chatsMessages = this.chatsMessages.filter(
      (chatMessage) =>
        chatMessage.userId !== userId ||
        chatMessage.chatId !== chatId ||
        chatMessage.messageId !== messageId
    );
  }

  updateChatMessageStatus(userId, chatId, messageId, status) {
    let message = this.getChatMessage(userId, chatId, messageId);
    if (!message) {
      return null;
    }
    message.status = status;
    return message;
  }
}
