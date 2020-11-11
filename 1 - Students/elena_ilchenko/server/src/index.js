const express = require('express') 
const fs = require('fs');

const chats = require('./controllers/chat')
const contacts = require('./controllers/contact')

const server = express();
const db = "./src/db";
server.use(express.json());

// server.get('/chats', (req, res) => {
//     fs.readFile('./src/db/chats.json', 'utf-8', (e, data) => {
//         if (!e) {
//             res.json(JSON.parse(data));
//         }
//     })
// })

server.get('/chats/:user', chats.loadChats);
server.get('/contacts/:user', contacts.loadContacts);

server.post('/chats/:user', function (req, res) {
    console.log(req.body)
    fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
        let newContent;
        if (!e) {
            let content = JSON.parse(data);
            content.chats.push(req.body);
            newContent = JSON.stringify(content);
        }
        fs.writeFile(`${db}/users/${req.params.user}.json`, newContent, () => {
            console.log('just updated json')
        })
    })
    
});

server.listen(4000, () => { console.log('running at 4000') })