const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    target: 'web',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        compress: true,
        port: 80,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.svg']
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.tsx$/, use: 'ts-loader' },
            { test: /\.(png|jpg|gif|eot|ttf|woff|woff2|ico)$/, use: 'url-loader' },
            { test: /\.svg$/, use: ['svg-inline-loader'] },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './assets', to: './assets' }
        ]),
        new HtmlWebpackPlugin({ template: './src/index.tmpl.html', title: 'FewBox' })
    ]
}
module.exports = config;