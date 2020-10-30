const db = "./src/db";
const fs = require("fs");

let mod = {
  async loadChats(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, "utf-8", (err, data) => {
      if (!err) {
        let chats = JSON.parse(data).chats;
        res.json(chats);
      }
    });
  },
};

module.exports = mod;
