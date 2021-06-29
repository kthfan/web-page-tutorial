const path = require('path');


module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".json"]
  }
};
