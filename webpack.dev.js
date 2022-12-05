const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPartialsPageNames = require('./src/partials').htmlPartialsPageNames;
const sectionPartials = require('./src/partials/sections').sectionPartials;
const FR = require('./src/locales/fr.json');
const EN = require('./src/locales/en.json');

let multipleSectionPlugins = sectionPartials.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/sections/${name}.html`),
    filename: `${name}.html`,
  });
});

let multipleHtmlPlugins = htmlPartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/${name}.html`),
    filename: `${name}.html`,
  });
});

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, './src'),
    },
    port: 3000,
  },

  module: {
    rules: [
      // SASS LOADER
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',

      // ********* TO CHANGE 'FR' OR 'EN' TITLE FOR DEV MODE ********* //
      title: `${FR.head.title} | Development`,

      // ********* TO CHANGE 'fr' OR 'en' LANG FOR DEV MODE ********* //
      lang: 'fr',
    }),

    ...multipleHtmlPlugins,

    ...multipleSectionPlugins,
  ],
});
