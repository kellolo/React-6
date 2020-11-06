const db = './src/db';
const fs = require('fs');

const {getAccount} = require('./account.controller.js');

let mod = {
    async loadChats(req, res) {
        const user = req.params.user;
        const userChatsId = (await getAccount(user)).chats;
        const allChats = JSON.parse(fs.readFileSync(`${db}/chats/chats.json`, 'utf-8'));
        
        const chats = allChats.filter((chat) => userChatsId.includes(chat.id));                            
        res.json(chats);

        // fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
        //     if(!e) {
        //         let chats = JSON.parse(data).chats;                          
        //         res.json(chats);
        //     }            
        // });     
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
    }
}

module.exports = mod;