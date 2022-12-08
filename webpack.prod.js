const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },

  module: {
    rules: [
      // SASS LOADER
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              implementation: require('postcss'),
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
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
    // MINIFY CSS
    new MiniCssExtractPlugin({
      filename: 'index.[contenthash].css',
    }),

    // PURGE CSS
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),

      // ********* ADD SAFE SELECTOR OR WORD TO EXCLUDE - E.g. Class .aos-animate is excluded ********* //
      safelist: ['aos-animate'],
    }),

    // COPY FILES
    new CopyPlugin({
      patterns: [
        // Files
        {
          from: path.resolve(__dirname, './src/assets/files/'),
          to: './assets/files/',
        },

        // Images
        {
          from: path.resolve(__dirname, './src/assets/images/'),
          to: './assets/images/',
        },

        // Icons
        {
          from: path.resolve(__dirname, './src/assets/icons/'),
          to: './assets/icons/',
        },
      ],
    }),
  ],

  optimization: {
    minimize: true,
    splitChunks: { chunks: 'all' },
    runtimeChunk: 'single',
  },
});
