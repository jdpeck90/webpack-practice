var webpack = require('webpack');
var path = require('path');


module.export = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, './dist'),

        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
        ]
    }

}