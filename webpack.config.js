// webpack v4
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    target: "web", // Compilieren wird auf dem Browser ausgeführt
    devtool: "source-map",
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                autoprefixer({
                                    browsers: [">1%", "last 4 versions"]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin({filename: 'style.css'}),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin({
            inject: false,
            //hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};;