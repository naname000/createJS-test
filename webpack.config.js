const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            createjs: 'createjs/builds/1.0.0/createjs.js'
        }
    },
    module: {
        rules: [
            {
                test: /node_modules[/\\]createjs/,
                loaders: [
                    'imports-loader?this=>window',
                    'exports-loader?window.createjs'
                ]
            }
        ]
    }
}

module.exports = config;
