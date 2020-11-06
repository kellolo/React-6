const db = './src/db';
const fs = require('fs');

let mod = {
    async loadAccount(req, res) {
        try {
            const userId = req.params.user;
            const account = await this.getAccount(userId);
            const chats = await this.getChats(account.chats);
            const contacts = await this.getContacts(chats);

            const result = {
                account, chats, contacts
            };

            setTimeout(() => res.json(result), 2000);

            // res.json(result);
        } catch (error) {
            console.log(error);
            return false;
        }                 
    },
    async getAccount(userId) {
        try {
            const account = JSON.parse(fs.readFileSync(`${db}/users/${userId}.json`, 'utf-8'));
            return account;
        } catch (error) {
            console.log(error);
            return false;
        }        
    },
    async getChats(chatsId) {
        try {
            const chatsArray = chatsId.map((chatId) => {
                const chat = JSON.parse(fs.readFileSync(`${db}/chats/${chatId}.json`, 'utf-8'));
                return chat;
            });
            return chatsArray;
        } catch (error) {
            console.log(error);
            return false;  
        } 
    },
    async getContacts(chats) {
        try {
            const contactsArray = chats.map((chat) => {
                const contactId = chat.contacts;
                const contact = JSON.parse(fs.readFileSync(`${db}/users/${contactId}.json`, 'utf-8'));
                return contact;
            });
            return contactsArray;            
            
        } catch (error) {
            console.log(error);
            return false;            
        }
    },
      
}

module.exports = mod;