const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    }
};