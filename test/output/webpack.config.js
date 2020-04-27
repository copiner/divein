const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'build'),//base path
        publicPath:'/',//index.html  js/main.js --> /js/main.js
        chunkFilename:'ex/[name]-[hash].js',//import('./add')...
        library:'[name]',//detail at js/main.js
//        libraryTarget:'window'// global|window|commonjs
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development'
};
