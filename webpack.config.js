const path = require('path')
const webpack = require('webpack')

const plugins = []
let devtool = false  // 是否开启source-map
if (process.env.PRODUCTION) {
    // 压缩
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
        }
    }))
} else {
    devtool = '#eval-source-map'
}

module.exports = {
    entry: {
        build: './src/main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, './src')]
            },
        ]
    },
    plugins
}
