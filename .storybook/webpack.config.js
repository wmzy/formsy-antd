const path = require('path');

process.env.BABEL_ENV = 'development';

module.exports = async ({config}) => {
  config.resolve.alias['formsy-antd'] =  path.resolve(__dirname, '..');
  config.module.rules.push(
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
  );

  return config;
}
