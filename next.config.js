// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass(
  {
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/personal': { page: '/personal' },
        '/professional': { page: '/professional' }
      }
    }
  }
)
