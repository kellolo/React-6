const db = './server/src/db';
const fs = require('fs');

let mod = {
    async loadChats(req, res) {
        fs.readFile(`${db}/chats/chats.json`, 'utf-8', (e, data) => {
            if(!e) {
                let chats = JSON.parse(data);
                res.json(chats);
            }
        })
    }
}

module.exports = mod;