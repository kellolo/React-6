const db = './src/db';
const fs = require('fs');

const {getChats} = require('./chat.controller.js');
const {getContactList} = require('./contacts.controller.js');

let mod = {
    async loadAccount(req, res) {
        try {
            const userId = req.params.user;
            const account = await this.getAccount(userId);
            const chats = await getChats(account.chats);
            const contactList = await getContactList(account.contacts);

            const result = {
                account, chats, contactList
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
    }
}

module.exports = mod;