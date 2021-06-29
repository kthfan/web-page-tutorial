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
    extensions: [".ts", ".js", ".json"],
    modules:[path.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [{
      test: /.ts$/,
      use: ['awesome-typescript-loader']
    }]
  },
}