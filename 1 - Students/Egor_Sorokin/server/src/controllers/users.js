const db = './src/db';
const bodyParser = require("body-parser");
const fs = require('fs');

module.exports = {
    async changePassword(req, res) {
        try {
            fs.readFile(`${db}/users.json`, "utf-8", (err, data) => {
                if (!err) {
                    let newUsers = JSON.parse(data);
                    let userIndex = newUsers.findIndex(item => item.id == req.params.id)
                    newUsers[userIndex].password = req.body.password;
                    fs.writeFile(`${db}/users.json`, JSON.stringify(newUsers, null, ' '), err => {
                        if (err) {
                            console.log(err)
                        }
                    })
                }
            })
        } catch(err) {
            console.log(err)
        }
    }
}