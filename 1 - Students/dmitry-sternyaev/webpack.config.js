const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "index.jsx"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: path.join("js", "bundle.js"),
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            [
              "@babel/plugin-proposal-class-properties",
              {
                loose: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "assets/images",
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets/fonts",
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("", "[name].css"),
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new FaviconsWebpackPlugin(
      path.resolve(__dirname, "public/assets", "favicon.ico")
    ),
  ],
  devServer: {
    port: 3300,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
