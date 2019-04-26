module.exports = {
    devServer: {
        contentBase: __dirname
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ],
    },
}