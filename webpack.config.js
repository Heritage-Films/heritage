const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        library: "HeritageAnalytics",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-transform-async-to-generator", {}],
                            ["@babel/plugin-transform-arrow-functions", {}],
                            ["@babel/plugin-transform-modules-commonjs", {}],
                        ]
                    }
                }
            }
        ]
    },
    mode: "development",
}