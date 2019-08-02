const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const WorkboxPlugin = require('workbox-webpack-plugin') // 引入 PWA 插件
const commonConfig = require('./webpack.base.config.js')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name].[contenthash].js',
    chunkFilename: 'scripts/[name].[contenthash].js'
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      cacheGroups: {
        // 公共代码打包分组配置
        jquery: {
          name: 'jquery',
          test: /[\\/]node_modules[\\/]jquery[\\/]/
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 清除无用 css---生产环境---csstree-shaking
    new PurifyCSS({
      paths: glob.sync([
        // 要做 CSS Tree Shaking 的路径文件
        path.resolve(__dirname, '..', 'src/*.html'),
        path.resolve(__dirname, '..', 'src/*.js'),
        path.resolve(__dirname, '..', 'src/**/*.jsx'),
      ])
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
  ]
})
