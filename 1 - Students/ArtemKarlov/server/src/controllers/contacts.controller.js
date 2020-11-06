const db = './src/db';
const fs = require('fs');

const {getAccount} = require('./account.controller.js');

let mod = {
    async loadContactList(req, res) {
        const userId = req.params.user;
        const account = await getAccount(userId);
        const contactList = await this.getContactList(account.contacts);

        res.json(contactList);
    },
    async loadContact(req, res) {
        const contactId = req.params.contact;
        const contact = JSON.parse(fs.readFileSync(`${db}/users/${contactId}.json`, 'utf-8'));
                         
        res.json(contact);  
    },
    async getContact(contactId) {
        return JSON.parse(fs.readFileSync(`${db}/users/${contactId}.json`, 'utf-8'));
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
    async getContactList(contactsId) {
        const contactList = contactsId.map((contactId) => {
            const contact = JSON.parse(fs.readFileSync(`${db}/users/${contactId}.json`, 'utf-8'));
            const name = `${contact.name} ${contact.surname}`;
            const id = `contlist-${(contact.id.split('-'))[1]}`;
            const contactListItem = {
                id: id,
                contact: contact.id,
                name: name,
                avatarUrl: contact.avatarUrl,
            };
            return contactListItem;
        });

        return contactList;
    }
}

module.exports = mod;