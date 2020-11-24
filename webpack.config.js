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
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", 
                        options: {
                        presets: ["@babel/preset-env"]  //Preset used for env setup
                    }
                }
            },
        ]
    },
    mode: "development",
}