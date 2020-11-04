  
const express = require('express');
const fs = require('fs');

const chats = require('./controllers/chat.js');

const server = express();
server.use(express.json());



server.get('/chats/:user', chats.loadChats); //bind possible

server.listen(4000, () => { console.log('running at 4000') })