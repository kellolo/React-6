const db = "./src/db";
const fs = require("fs");
const writer = require("../utils/writer.js");

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
        let find = chats.find((el) => el.id == req.params.chat);
        res.json(find);
      }
    });
  },

  async addDialog(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, "utf-8", (err, data) => {
      if (!err) {
        let obj = JSON.parse(data);
        let item = obj.contacts.find((el) => el.contact == req.params.contact);

        // item.id = `chat_${obj.chats.length + 1}`;
        obj.chats.push(item);

        obj.contacts.splice(obj.contacts.indexOf(item), 1);
        writer(`${db}/users/${req.params.user}.json`, obj);
        res.json(obj.chats);
      }
    });
  },

  async deleteDialog(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, "utf-8", (err, data) => {
      if (!err) {
        let obj = JSON.parse(data);
        let item = obj.chats.find((el) => el.contact == req.params.contact);

        // item.id = '';
        obj.contacts.push(item);
        console.log(item)
        obj.chats.splice(obj.chats.indexOf(item), 1);
        console.log(obj)
        writer(`${db}/users/${req.params.user}.json`, obj);
        res.json(obj.chats);
      }
    });
  },
};

module.exports = mod;
