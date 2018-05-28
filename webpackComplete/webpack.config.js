var webpack = require("webpack");
var path = require('path')

const config = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {

        rules: [

            {
                test: /\.css$/,

                use: ['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" 
            
            }
        ]
    },

    plugins: []
}

if(process.env.Node_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin() 
    )
}

module.exports = config;