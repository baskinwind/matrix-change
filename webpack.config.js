var path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'matrixMove.js',
    path: path.resolve(__dirname, 'dist'),
    library: "mMove",
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};