var path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'matrixChange.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mChange',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'lib')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
