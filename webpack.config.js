const path = require("path")
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/app.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),    
  ], 
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },      
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  mode: "development",
}