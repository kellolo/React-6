const db = './src/db';
const fs = require('fs');

let mod = {
    async loadChats(req, res) {
        fs.readFile(`./src/db/users/u-1.json`, 'utf-8', (e, data) => {
            if(!e) {
                let chats = JSON.parse(data).chats;
                res.json(chats);
            }
        })
    }
}

module.exports = mod;