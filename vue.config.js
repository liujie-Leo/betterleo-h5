const proxy = require('./server/proxy')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist-mobile',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  productionSourceMap: false,
  devServer: {
    // port: 80,
    disableHostCheck: true,
    proxy
  }
}
