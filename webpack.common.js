const path = require("path");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },

  module: {
    rules: [
      // // ASSETS LOADER
      {
        test: /\.(png|svg|jpe?g|webp|pdf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
    ],
  },

  resolve: {
    fallback: {
      fs: false,
    },
  },

  plugins: [
    // PARTIALS HTML
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/partials/Navigation.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
      {
        path: path.join(__dirname, "./src/partials/Header.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
      {
        path: path.join(__dirname, "./src/partials/Main.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
      {
        path: path.join(__dirname, "./src/partials/Footer.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
    ]),
  ],
};
