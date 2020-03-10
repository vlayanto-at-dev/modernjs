const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/proposal-class-properties']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}