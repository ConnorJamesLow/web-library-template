const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.p?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(woff2?|ttf|eot|svg)/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        clean: true,
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: []
        })
    ],
};

module.exports = config;
