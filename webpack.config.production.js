const c = require('./webpack.config')

const webpack = require('webpack')

module.exports = Object.assign({}, c, {
  plugins: (c.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ])
})
