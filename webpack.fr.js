const path = require('path');
const { merge } = require('webpack-merge');
const prod = require('./webpack.prod.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FR = require('./src/locales/fr.json');

module.exports = merge(prod, {
  output: {
    path: path.resolve(__dirname, 'dist/FR'),
  },

  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      title: FR.head.title,
      lang: 'fr',
    }),
  ],
});
