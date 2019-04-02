const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-admin/'
    : '/',
  outputDir: 'docs',
  devServer: {
    port: 8070
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/element-variables.scss";@import "@/assets/scss/mixin.scss";`
        // data: `@import "@import "@/assets/scss/mixin.scss";`
      }
    }
  },
  configureWebpack: {
    externals: {
      'CKEDITOR': 'CKEDITOR',
      'AMap': 'AMap',
      'BMap': 'BMap'
    }
  },
  chainWebpack: config => {
    // config.module.rules.delete('svg')
    // config.module
    // .rule('svg-sprite-loader')
    // .test(/\.svg$/)
    // .include
    // .add(path.resolve(__dirname, 'src/icons'))
    // .add(path.resolve(__dirname, 'node_modules')) /* 处理svg目录 */
    // .end()
    // .use('svg-sprite-loader')
    // .loader('svg-sprite-loader')
    // .options({
    //   symbolId: 'icon-[name]'
    // })
  }
}