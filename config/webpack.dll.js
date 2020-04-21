/*
dll 单独打包
webpack.DllPlugin

webpack.DllReferencePlugin

add-asset-html-webpack-plugin
*/
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
      jquery:['jquery'],
      React:['React']
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'../dll'),
        library:'[name][hash]'
    },
    //plugins
    plugins:[
        new webpack.DllPlugin({
            name:'[name][hash]',
            path:resolve(__dirname,'../dll/manifest.json'),
        })
    ],

    //mode
    mode:'production'
}
