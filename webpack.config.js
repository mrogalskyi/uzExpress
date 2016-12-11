var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/main.ts",

    output: {
        filename: "main.js",
        path: "./dist"
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".html"]
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
                test: /\.html$/,
                loader: "raw"
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "file?name=assets/[name].[hash].[ext]"
            },
        ]
    },
    devServer: {
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html"
        })
    ]

};