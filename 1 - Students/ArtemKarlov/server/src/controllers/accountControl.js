const db = './src/db';
const fs = require('fs');

let mod = {
    async loadAccount(req, res) {
        fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
            if(!e) {
                let account = JSON.parse(data);                          
                res.json(account);
            }            
        });  
           
    }
}

module.exports = mod;