const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    'stack-source-map/register',
    path.join(__dirname, '/src/client.js'),
  ],
  resolve: {
    extensions: ["", ".js"]
  },
  devServer:{
    contentBase: 'src',
    devtool: 'cheap-module-eval-source-map',
    hot: true,
    inline: true,
    port: 3003,
    host: 'localhost',
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ],
  }
};

module.exports = config;
