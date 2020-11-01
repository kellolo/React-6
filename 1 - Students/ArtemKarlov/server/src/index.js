const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

server.listen(4000, () => {console.log('running at 4000')});