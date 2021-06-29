// webpack.config.prod.js
var path = require('path')

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json"],
    modules:[path.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [{
      test: /.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    }]
  },
}