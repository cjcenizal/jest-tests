const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index',

  context: path.resolve(__dirname, 'src'),

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        // Apply rule to everything except node_modules.
        path.resolve(__dirname, './node_modules'),
      ],
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      cache: true,
      showErrors: true
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 7001,
    disableHostCheck: true,
    historyApiFallback: {
      index: '/',
    },
  },
};
