var path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'matrixMove.js',
        path: path.resolve(__dirname, 'package'),
        library: "mMove",
        libraryTarget: 'umd',
        libraryExport: "default"
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