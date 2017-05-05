const c = require('./webpack.config')

const webpack = require('webpack')

return Object.assign({}, c, {
  plugins: Array.concat((c.plugins || []), [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ])
})
