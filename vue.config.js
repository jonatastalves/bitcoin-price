const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/bitcoin-price/'
  : '/',
  transpileDependencies: true,
  lintOnSave: false,
})
