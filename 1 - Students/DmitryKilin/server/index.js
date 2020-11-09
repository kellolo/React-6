const express = require('express');
const fs = require('fs');

const chats = require('./src/controllers/chats.js');
const contacts = require('./src/controllers/contacts.js')

const server = express();
server.use(express.json());

// server.get('/chats', (req, res) => {
//     fs.readFile('./server/src/db/chats/chats.json', 'utf-8', (e, data) => {
//         if(!e) {
//             res.json(JSON.parse(data));
//         }
//     })
// })

server.get('/chats', chats.loadChats); //bind possible
// server.get('/contacts', (reg, res) => {res.json({"G":"g"})});
server.get('/contacts', contacts.loadContacts)

server.listen(4000, () => { console.log('running at 4000') })