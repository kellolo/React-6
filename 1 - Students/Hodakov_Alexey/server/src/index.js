const express = require("express");
const fs = require("fs");
const { request } = require("http");
const { response } = require("express");
const chats = require('./controllers/chat.js');

const server = express();
server.use(express.json());

// server.get('/chats', (req,res)=>{
//     fs.readFile('./src/db/chats.json', 'utf-8', (err,data)=> {
//         if (!err) {
//             res.json(JSON.parse(data));
//         }
//     })
// })

server.get('/chats/:user', chats.loadChats); 

server.get('/contacts/:user', chats.loadContacts); 

server.get('/userinfo/:user', chats.userInfo);

server.get('/contactuserinfo/:user/:chat', chats.loadContactChatsInfo);



server.listen(3000, () => {
  console.log("server is run!! port:3000");
});
