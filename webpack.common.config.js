const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    polyfills: ['./src/polyfills.ts'],
    vendor: ['./src/vendor.ts'],
    app: ['./src/main.ts'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFilename: path.join(__dirname, 'tsconfig.json'),
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.html/,
        use: 'raw-loader',
      },
      {
        test: /\.css/,
        include: path.join(__dirname, 'src/app'),
        use: 'raw-loader',
      },
      {
        test: /\.(png|jpg|svg|gif|eot|woff|ttf)$/,
        use: 'file-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular([\\/])core([\\/])(@angular|esm5)/,
      path.join(__dirname, 'src'),
      {},
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
