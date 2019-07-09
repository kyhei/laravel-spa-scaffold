const path = require('path')
const mix = require('laravel-mix')

mix.webpackConfig({
  resolve: {
    extensions: ['.svg', '.png', '.vue'],
    alias: {
      '@app': path.resolve(__dirname, './resources/js/app')
    }
  },
})

mix
  .js('resources/js/app.js', 'public/js')

