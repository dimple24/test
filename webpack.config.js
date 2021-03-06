const  HtmlWebPackPlugin = require("html-webpack-plugin")
module.exports = {
  module: {
    rules: [
      {
        test: "/\.js$/",
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: "/\.html$/",
        exclude: "/node_modules/",
        use:[ {
          loader: "html-loader"
        }
      ]
      }

    ]
  },
  plugin: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
}