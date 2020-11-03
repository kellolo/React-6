const db = './src/db';
const fs = require('fs');

let mod = {
    async getContacts(req, res) {
        const userContactsId = JSON.parse(fs.readFileSync(`${db}/users/${req.params.user}.json`, 'utf-8')).contacts;

        const contactsArray = userContactsId.map((contactId) => {
            const contact = JSON.parse(fs.readFileSync(`${db}/users/${contactId}.json`, 'utf-8'));
            return contact;
        });
                         
        res.json(contactsArray);  
    }
}

module.exports = mod;