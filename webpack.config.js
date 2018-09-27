var path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib-ts/index.ts',
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
        test: /\.ts$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'lib-ts')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
