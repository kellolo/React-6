const path = require("path");
const webpack = require('webpack');

module.exports = {
   entry: {
       app: './index.js',
   },
   context: path.resolve(__dirname, "static_src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
   },
};
