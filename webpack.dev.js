const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FR = require("./src/locales/fr.json");

module.exports = merge(common, {
  mode: "development",

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "./src"),
    },
    port: 3000,
  },

  module: {
    rules: [
      // SASS LOADER
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      title: FR.head.title + " - Development",
      lang: "fr",
    }),
  ],
});
