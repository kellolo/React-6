const express = require('express');
const fs = require('fs');

const chats = require('./controllers/chat.js')

const server = express();
server.use(express.json());

// server.get('/chats', (req, res) => {
//     fs.readFile('./src/db/chats.json', 'utf-8', (e, data) => {
//         if (!e) {
//             res.json(JSON.parse(data));
//         }
//     })
// })

server.get('/users', (req, res) => {
    fs.readFile('./src/db/users.json', 'utf-8', (e, data) => {
        if (!e) {
            res.json(JSON.parse(data));
        }
    })
})

server.get('/chats/:user', chats.loadChats);

server.listen(4000, () => { console.log('Running at 4000') })