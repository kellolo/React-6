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
    async getContact(req, res) {
        const userContactsId = JSON.parse(fs.readFileSync(`${db}/users/${req.params.user}.json`, 'utf-8')).contacts;

        const contactsArray = userContactsId.map((contactId) => {
            const contact = JSON.parse(fs.readFileSync(`${db}/users/${contactId}.json`, 'utf-8'));
            return contact;
        });
                         
        res.json(contactsArray);  
    },
    async getContactList(contactsId) {
        const contactList = contactsId.map((contactId) => {
            const contact = JSON.parse(fs.readFileSync(`${db}/users/${contactId}.json`, 'utf-8'));
            const fullName = `${contact.name} ${contact.middleName} ${contact.surname}`
            const contactListItem = {
                contact: contact.id,
                name: fullName,
                avatar: contact.avatarUrl,
            };
            return contactListItem;
        });

        return contactList;
    }
}

module.exports = mod;