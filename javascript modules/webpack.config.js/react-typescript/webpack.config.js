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
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
            },
          }
        ],
      },
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          }
        ],
      },
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/typescript', '@babel/preset-env'],
            },
          }
        ],
      },
      {
        test: /.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env'],
            },
          }
        ],
      }
    ]
  },
}