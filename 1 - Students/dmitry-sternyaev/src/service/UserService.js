import users from "../../public/assets/data/Users.json";
import usersChats from "../../public/assets/data/UsersChats.json";
import usersChatsMessages from "../../public/assets/data/UsersChatsMessages.json";
import usersContacts from "../../public/assets/data/UsersContacts.json";
import "../../public/assets/images/ant.png";
import "../../public/assets/images/fish.png";
import "../../public/assets/images/lobster.png";
import "../../public/assets/images/parrot.png";
import "../../public/assets/images/gorilla.png";

export default class UserService {
  users = users.data;
  usersChats = usersChats.data;
  usersChatsMessages = usersChatsMessages.data;
  usersContacts = usersContacts.data;

  getUser(userId) {
    return this.users.find((user) => user.userId === userId);
  }

  getUserContacts(userId) {
    return this.usersContacts
      .filter((contact) => contact.userId === userId)
      .map((contact) => {
        return {
          ...this.getUser(contact.contId),
        };
      });
  }

  getUserChats(userId) {
    return this.usersChats
      .filter((chat) => chat.userId === userId)
      .map((chat) => {
        return {
          ...this.getUser(chat.chatId),
          message: chat.message,
          messages: this.usersChatsMessages.filter(
            (message) =>
              message.userId === chat.userId && message.chatId === chat.chatId
          ),
        };
      });
  }
}
