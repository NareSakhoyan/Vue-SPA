const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    entry: {
        app: path.resolve(__dirname, '../src/client-entry.js')
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /(\.js$)|(\.vue$)/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        },
        {
            test: /(\.vue$)/,
            loader: 'vue-loader',
        },
            {
                test: /(\.js$)/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'assets/js/[name].js',
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}

module.exports = config
