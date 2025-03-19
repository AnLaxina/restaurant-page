const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/html/template.html"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};