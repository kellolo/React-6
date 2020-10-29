import Contacts from "../../public/assets/data/Contacts.json";

export default class ContactsService {
  contacts = Contacts.data;

  getContacts(userId) {
    return this.contacts.filter((contact) => contact.userId === userId);
  }
}