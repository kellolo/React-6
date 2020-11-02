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

  async loadContacts(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, "utf-8", (err, data) => {
      if (!err) {
        let contacts = JSON.parse(data).contacts;
        res.json(contacts);
      }
    });
  },

  async userInfo(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, "utf-8", (err, data) => {
      if (!err) {
         res.json(JSON.parse(data));
      }
    });
  },

  async loadContactChatsInfo(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, "utf-8", (err, data) => {
      if (!err) {
        let chats = JSON.parse(data).chats;
        let find = chats.find( el => el.id == req.params.chat)
        res.json(find);
      }
    });
  },

};

module.exports = mod;
