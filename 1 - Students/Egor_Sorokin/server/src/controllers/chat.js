const db = './src/db';
const bodyParser = require("body-parser");
const fs = require('fs');
const { findMsg } = require('./messages.js')
const update = require('react-addons-update') //'react-addons-update'

const template = {
    "messages": ''
}

let mod = {
    async loadChats(req, res) {
        fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
                    if (!e) {
                        let chats = JSON.parse(data).chats; 
                        res.json(chats);
                    }
                })
    },
    async loadChat(req, res) {
        try {
            await fs.readFile(`${db}/chats/${req.params.id}.json`, "utf-8", (err, data) => {
                if (!err) {
                    let d = JSON.parse(data);
                    findMsg(d.messages)
                    .then(messages => {
                        if (messages) {
                            let DTO = Object.assign({}, d, { messages });
                            res.json(DTO);
                        }
                    })
                } 
                // else {
                //     this.create(req, res);
                // }
            })
        } catch(err) {
            console.log(err);
            return false;
        }
        
    },
    async create(req, res) {
        let newChat = Object.assign({_id: req.params.id, users: [req.body.myId, req.body.userId]}, template);
        fs.writeFile(`${db}/chats/${req.params.id}.json`, JSON.stringify(newChat, null, ' '), err => {
            if (!err) {
                this.loadChat(req, res);
            }
        })

        let newUser1;
        fs.readFile(`${db}/users/${req.body.myId}.json`, "utf-8", (err, data) => {
            if (!err) {
                newUser1 = JSON.parse(data);
                let newUser1Updated = update(newUser1, { chats: {$push: [{
                    id: req.params.id,
                    title: req.body.title,
                    avatar: req.body.avatar,
                    lastMessage: 'No messages yet'
                }] } })
                fs.writeFile(`${db}/users/${req.body.myId}.json`, JSON.stringify(newUser1Updated, null, ' '), err => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
        
        let newUser2;
        fs.readFile(`${db}/users/${req.body.userId}.json`, "utf-8", (err, data) => {
            if (!err) {
                newUser2 = JSON.parse(data);
                let newUser2Updated = update(newUser2, { chats: {$push: [{
                    id: req.params.id,
                    title: req.body.title,
                    avatar: req.body.avatar,
                    lastMessage: 'No messages yet'
                }] } })
                fs.writeFile(`${db}/users/${req.body.userId}.json`, JSON.stringify(newUser2Updated, null, ' '), err => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
    }
}

module.exports = mod;