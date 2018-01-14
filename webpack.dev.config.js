const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = webpackMerge(common, {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: path.join(__dirname, 'src/app'),
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    stats: 'minimal',
    port: 9090,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ]
});
