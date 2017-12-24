const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index.js', './src/styles.sass'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/app.[hash:8].bundle.js',
    sourceMapFilename: 'js/app.bundle.map.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.(sass|scss|css)$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      }),
    },
    {
      test: /\.(jpe?g|png|gif)$/i, // to support eg. background-image property
      loader: 'file-loader',
      query: {
        name: '[name].[hash:8].[ext]',
        outputPath: 'images/',
      },
    },
    // {
    //   test: /\.(eot|svg|ttf|woff|woff2)$/,
    //   loader: 'file-loader',
    //   query: {
    //     name: '[name].[ext]',
    //     outputPath: 'fonts/',
    //   },
    // },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/styles.[hash:8].bundle.css'),
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index.html',
      template: 'src/index.html',
      title: 'Test app',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // }),
  ],
};
