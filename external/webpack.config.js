const path = require("path");
// Style loader
// Loaders -> Module -> Rules
// Plugins -> Extender los poderes de los loaders -> carga js,css y genera un index.html
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCSSExtractPlugin.loader
          // },
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Plugins",
      template: path.resolve(__dirname, "index.html")
    })
    // new MiniCSSExtractPlugin({
    //   filename: "css/[name].css"
    // })
  ]
};
