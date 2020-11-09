const db = './server/src/db';
const fs = require('fs');

let mod = {
    async loadContacts(req, res) {
        fs.readFile(`${db}/contacts/contacts.json`, 'utf-8', (e, data) => {
            if(!e) {
                let contacts = JSON.parse(data);
                res.json(contacts);
            }
        })
    }
}

module.exports = mod;