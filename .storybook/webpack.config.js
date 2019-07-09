const path = require('path');

module.exports = async ({ config, mode }) => {

  config.resolve.alias['@app'] = path.resolve(__dirname, '../resources/js/app')

  config.module.rules.push(...[
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.vue$/,
      loader: 'storybook-addon-vue-info/loader',
      enforce: 'post'
    },
    {
      test: /\.styl$/,
      loaders: ['style-loader', 'css-loader', 'stylus-loader']
    }
  ])

  return config;
};