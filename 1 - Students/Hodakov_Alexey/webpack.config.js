const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpack = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "index.jsx"),
    // main: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "",
    filename: path.join("js", "bundle.js"),
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
          //preset: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        loader: "file-loader",
        options:{
          outputPath: "img",
          publicPath: "../img",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("style", "[name].css"),
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CopyWebpack(
      {
      patterns: [{ from: "src/assets/imgs", to: "img" }], 
    }),
  ],
  devServer: {
    port: 3300,
    hot: true,
    open: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
