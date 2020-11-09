const db = './src/db';
const fs = require('fs');

module.exports = {
    async findMsg(arr) {
        try {
            let messages = await JSON.parse(fs.readFileSync(`${db}/messages/msg.all.json`, 'utf-8'));
            return arr.map(id => messages.find(msg => msg._id == id));
        }
        catch(err) {
            return false;
        }
    }
}