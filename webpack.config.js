const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./bootstrap.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "/build")
  },
  mode: "development",
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: "json-loader"
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html"
    })
  ]
}