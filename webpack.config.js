const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        use: [ 'babel-loader' ]
      }
    ]
  }
}
