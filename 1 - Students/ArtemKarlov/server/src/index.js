const express = require('express');
const fs = require('fs');

const account = require('./controllers/accountControl.js');
const chats = require('./controllers/chatControl.js');
const contacts = require('./controllers/contactsControl.js');

const server = express();
server.use(express.json());

// server.get('/chats', (req, res) => {
//     fs.readFile('./src/db/chats.json', 'utf-8', (e, data) => {
//         if(!e) {
//             res.json(JSON.parse(data));
//         }
//     });
// });

server.get('/:user', account.loadAccount);
server.get('/contacts/:user', contacts.getContacts);
server.get('/chats/:user', chats.loadChats);

server.listen(4000, () => {console.log('running at 4000')});

