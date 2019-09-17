const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ['node_modules'],
  },
  webpack: function (config, { isServer }) {
    config.resolve.alias.components = path.resolve(__dirname, 'components')
    config.resolve.alias.pages = path.resolve(__dirname, 'pages')

    return config
  }
})