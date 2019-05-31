module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { 'browsers': ['last 2 versions', 'safari >= 7'] }
          }
        ],
        '@babel/preset-react'
      ],
      plugins: [
        ['import', {libraryName: 'antd', style: true }, 'antd'],
        ['import', {libraryName: 'formsy-antd', style: true, libraryDirectory: 'src'}, 'formsy-antd']
      ]
    },
    production: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
  }
};
