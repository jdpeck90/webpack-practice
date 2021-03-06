               var webpack = require('webpack');
var path = require('path');
var webpack = require('webpack')

config = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, './dist'),

        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
            test: /(\.css)$/, 
            loaders: ['style-loader', 'css-loader']
        },
        {
            test:/\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }
        ],
    },
    plugins: []
};
    
    if(process.env.NODE_ENV === 'production') {
        module.exports.plugins.push(
            new webpack.optimize.uglyifyPlugin()
        );
    }

module.exports = config;