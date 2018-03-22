const path = require('path');

process.env.BABEL_ENV = 'development';

module.exports = {
  resolve: {
    alias: {
      'formsy-antd': path.resolve(__dirname, '..')
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ],
        include: path.resolve(__dirname, '../node_modules/antd/')
      }
    ]
  }
};
