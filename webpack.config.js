const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        fs: 'empty',
        __dirname: false,
    },
    externals: {
        fs: "require('fs')",
    },
    mode: 'production',
}