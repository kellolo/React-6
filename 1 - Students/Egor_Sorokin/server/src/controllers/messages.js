const db = './src/db';
const fs = require('fs');
const bodyParser = require("body-parser");
const update = require('react-addons-update')

module.exports = {
    async findMsg(arr) {
        try {
            let messages = await JSON.parse(fs.readFileSync(`${db}/messages/msg.all.json`, 'utf-8'));
            return arr.map(id => messages.find(msg => msg._id == id));
        } catch(err) {
            return false;
        }
    },
    async sendMessage(req, res) {
        try {
            let messages = await JSON.parse(fs.readFileSync(`${db}/messages/msg.all.json`, 'utf-8'));
            let newId = 'm-' + (Number(messages.reduce((res, item) => {
                    return (Math.max(res, item._id.slice(2)));
                }, 0)) + 1);
            messages.push({
                _id: newId,
                sender: req.body.sender,
                text: req.body.text
            });
            fs.writeFile(`${db}/messages/msg.all.json`, JSON.stringify(messages, null, ' '), (err) => {});
            let chatToUpdate = await JSON.parse(fs.readFileSync(`${db}/chats/${req.params.id}.json`, 'utf-8'));
            chatToUpdate = update(chatToUpdate, { messages: {$push: [newId]}});
            await fs.writeFile(`${db}/chats/${req.params.id}.json`, JSON.stringify(chatToUpdate, null, ' '), (err) => {
                if (!err) {
                    let users = chatToUpdate.users;
                    fs.readFile(`${db}/users/${users[0]}.json`, "utf-8", (err, data) => {
                        if (!err) {
                            let newUser = JSON.parse(data);
                            let chatIndex = newUser.chats.findIndex(item => item.id == req.params.id)
                            newUser.chats[chatIndex].lastMessage = req.body.text;
                            fs.writeFile(`${db}/users/${users[0]}.json`, JSON.stringify(newUser, null, ' '), err => {
                                if (err) {
                                    console.log(err)
                                }
                            })
                        }
                    })
                    fs.readFile(`${db}/users/${users[1]}.json`, "utf-8", (err, data) => {
                        if (!err) {
                            let newUser = JSON.parse(data);
                            let chatIndex = newUser.chats.findIndex(item => item.id == req.params.id)
                            newUser.chats[chatIndex].lastMessage = req.body.text;
                            // let newUser = update(newUser, { chats: {$set: newChats } });
                            fs.writeFile(`${db}/users/${users[1]}.json`, JSON.stringify(newUser, null, ' '), err => {
                                if (err) {
                                    console.log(err)
                                }
                            })
                        }
                    })

                    res.json({
                        _id: newId,
                        chatId: req.params.id,
                        sender: req.body.sender,
                        text: req.body.text
                    })
                }
            })
            
        } catch(err) {
            console.log(err)
            return false;
        }
    }
}