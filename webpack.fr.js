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
      filename: 'index.html',
      template: './src/index.html',
      title: FR.head.title,
      lang: 'fr',
    }),
  ],
});
