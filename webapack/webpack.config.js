const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + "/public"
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true
            // }),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, ur()..
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: ['file-loader']
        }
        ]

    }
}