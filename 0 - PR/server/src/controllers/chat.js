const db = './src/db';
const fs = require('fs');
const { findMsg } = require('./messages.js');

const temp = {
    "users": [],
    "messages": []
};


let mod = {
    async loadChats(req, res) {
        fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
            if(!e) {
                let chats = JSON.parse(data).chats;
                res.json(chats);
            }
        })
    },
    async loadChat(req, res) {
        console.log('I am loading chat!');
        try {
            await fs.readFile(`${db}/chats/${req.params.id}.json`, 'utf-8', (err, data) => {
                if(!err) {
                    let d = JSON.parse(data);
                    findMsg(d.messages)
                    .then(messages => {
                        if(messages) {
                            let DTO = Object.assign({}, d, { messages });
                            res.json(DTO);
                        }
                    })

                } else {
                    this.create(req, res);
                }
            })
        }
        catch(err) {
            console.log(err);
            return false;
        }
    },
    async create(req, res) {
        let newChat = Object.assign({_id: req.params.id}, temp);
        // let newChat = JSON.parse(JSON.stringify(temp));

        fs.writeFile(`${db}/chats/${req.params.id}.json`, JSON.stringify(newChat, null, ' '), err => {
            if (!err) {
                // res.json({ status: true });
                this.loadChat(req, res);
            }
        });
    }
}

module.exports = mod;