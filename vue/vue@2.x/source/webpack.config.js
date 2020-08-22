const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

console.log(path.resolve(__dirname));

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  resolve: {
    // 添加一个在 node_modules 之前扫描的目录
    modules: [path.resolve(__dirname), "node_modules"],
  },
  devServer: {
    port: 10010,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "手写Vue 2.x",
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
