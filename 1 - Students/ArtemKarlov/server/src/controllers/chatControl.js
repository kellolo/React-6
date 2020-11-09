const db = './src/db';
const fs = require('fs');

let mod = {
    async loadChats(req, res) {
        const userChatsId = JSON.parse(fs.readFileSync(`${db}/users/${req.params.user}.json`, 'utf-8')).chats;
        const allChats = JSON.parse(fs.readFileSync(`${db}/chats/chats.json`, 'utf-8'));
        
        const chats = allChats.filter((chat) => userChatsId.includes(chat.id));                            
        res.json(chats);

        // fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
        //     if(!e) {
        //         let chats = JSON.parse(data).chats;                          
        //         res.json(chats);
        //     }            
        // });     
    }
}

module.exports = mod;