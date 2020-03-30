const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.svg']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.tsx$/, use: 'ts-loader' },
            { test: /\.svg$/, use: ['svg-inline-loader'] },
            {
                test: /\.(sa|sc)ss$/,
                include: [path.join(__dirname, 'src')],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'fewbox.min.css',
            chunkFilename: '[id].min.css',
        })
    ],
    externals: [nodeExternals()]
}
module.exports = config;