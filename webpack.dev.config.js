const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

const APP_DIR = path.resolve(__dirname, 'src/client')

module.exports = merge(common, {
  devtool: 'source-map',
  output: {
    publicPath: ''
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?http://localhost:3000',
    APP_DIR + '/index.js'
  ],

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})
