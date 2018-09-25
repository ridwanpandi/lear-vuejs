var path = require('path');

module.exports = {
    entry: [
        './app/main',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        "filename": 'calc.js'
    },
    module: {
        loaders: [
            // for read vue extension
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // for read css extension
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            // for read js extension
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.json'],
        alias: {
            components: path.resolve(__dirname, './app/components'),
            vue: path.resolve(__dirname, './node_modules/vue/dist/vue.common.js')
        }
    },
    watch: true
}
