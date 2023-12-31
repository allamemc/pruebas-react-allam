const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/main.js",
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
  },

  devServer: {
    inline: true,
    port: 8080,
  },
  resolveLoader: {
    modules: [path.join(__dirname, "node_modules")],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
        },
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.tpl.html",
    }),
  ],
};
