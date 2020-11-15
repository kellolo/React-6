const db = './src/db';
const bodyParser = require("body-parser");
const fs = require('fs');
const { findMsg } = require('./messages.js')
const update = require('react-addons-update');

const template = {
    "messages": []
}

let mod = {
    async deleteChat(req, res) {
        try {
            fs.readFile(`${db}/chats/${req.params.id}.json`, 'utf-8', (e, data) => {
                if (!e) {
                    let users = JSON.parse(data).users; 
                    fs.readFile(`${db}/users/${users[0]}.json`, "utf-8", (err, data) => {
                        if (!err) {
                            let newUser = JSON.parse(data);
                            let newChats = newUser.chats.slice();
                            let itemToDelete = newChats.findIndex(item => item.id == users[0]);
                            newChats.splice(itemToDelete, 1);
                            let newUserUpdated = update(newUser, { chats: {$set: newChats } });
                            fs.writeFile(`${db}/users/${users[0]}.json`, JSON.stringify(newUserUpdated, null, ' '), err => {
                                if (err) {
                                    console.log(err)
                                }
                            })
                        }
                    })
                    fs.readFile(`${db}/users/${users[1]}.json`, "utf-8", (err, data) => {
                        if (!err) {
                            let newUser = JSON.parse(data);
                            let newChats = newUser.chats.slice();
                            let itemToDelete = newChats.findIndex(item => item.id == users[0]);
                            newChats.splice(itemToDelete, 1);
                            let newUserUpdated = update(newUser, { chats: {$set: newChats } });
                            fs.writeFile(`${db}/users/${users[1]}.json`, JSON.stringify(newUserUpdated, null, ' '), err => {
                                if (err) {
                                    console.log(err)
                                }
                            })
                        }
                    })
                }
            })

            fs.unlink(`${db}/chats/${req.params.id}.json`, (e) => {
                if (!e) {
                    // let chats = JSON.parse(data).chats;
                    // console.log(chats)
                    res.json(true);
                }
            })
        } catch(err) {
            console.log(err)
        }
    },
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

        fs.readFile(`${db}/users/${req.body.myId}.json`, "utf-8", (err, data) => {
            if (!err) {
                let newUser1 = JSON.parse(data);
                let newUser1Updated = update(newUser1, { chats: {$push: [{
                    id: req.params.id,
                    title: req.body.title,
                    avatar: req.body.avatar,
                    lastMessage: 'No messages yet'
                }] } })
                fs.writeFile(`${db}/users/${req.body.myId}.json`, JSON.stringify(newUser1Updated, null, ' '), err => {
                    if (err) {
                        console.log(err)
                        res.json(true)
                    }
                })
            }
        })
        
        fs.readFile(`${db}/users/${req.body.userId}.json`, "utf-8", (err, data) => {
            if (!err) {
                let newUser2 = JSON.parse(data);
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