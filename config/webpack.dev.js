/*
  所有构建工具都是基于node平台运行，
  模块化默认采用commomjs
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
//const PostcssPresetEnv = require('postcss-preset-env');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const AddAssetHtmlWebpackkPlugin = require('add-asset-html-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = "development";

module.exports = {
    entry: './src/index.js',
    output:{
        filename:'index-[hash].js',
        path:resolve(__dirname,'../build')
    },
    //loader
    module:{
        rules:[
            {
              test:/\.js$/,
              exclude:/node_modules/,
              use:[
                {//babel-loader @babel/preset-env @babel/core
                  loader:'babel-loader',
                  options:{
                    /*
                    @babel/preset-env只能基本语法转换，不能转换高级语法如promise等等
                    则需要@babel/polyfill,只需在入口文件引入 import "@babel/polyfill", 这种方式导致代码冗余
                    不过可以根据需求，按需做兼容性处理，借助 core-js

                    配置参照babel.config.js，当然亦可配置在这里
                    @babel/preset-env
                    */
                    // presets:[
                    //   ['@babel/preset-env',{
                    //     useBuiltIns:'useage'
                    //   }]
                    // ]
                    cacheDirectory:true//缓存
                  }
                },
                // {
                //   //eslint-plugin-import eslint-config-airbnb/ eslint-config-airbnb-base
                //   loader:'eslint-loader',//检查规则eslint.config.js
                //   options:{}
                // }
              ]

            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                      loader:'postcss-loader',
                      options:{//规则postcss.config.js
                        ident:'postcss'
                      }
                    }
                ]
            },
            {
                test:/\.(jpg|png)$/,
                loader:'url-loader',
                options:{
                    //options
                    limit:8*1024,
                    esModule:true,
                    name:'[hash:10].[ext]',
                    outputPath:'static'
                }
            },
            {
                test:/\.(ttf|woff|woff2|eot|svg)$/,
                //exclude:/node_modules/
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]',
                    outputPath:'icon'
                }
            }

        ]
    },

    //plugins
    plugins:[
        new HtmlWebpackPlugin({
            //options
            template:'./src/index.html'
        }),
        // new webpack.DllReferencePlugin({
        //   manifest:resolve(__dirname,'../dll/manifest.json')
        // }),
        // new AddAssetHtmlWebpackkPlugin([
        //   {filepath:resolve(__dirname,'../dll/jquery.js')},
        //   {filepath:resolve(__dirname,'../dll/React.js')}
        // ])
    ],

    //mode
    mode:'development',
    devtool:'eval-source-map',
    // optimization:{
    //   splitChunks:{
    //     chunks:'all'//将node_modules内容单独打包
    //   }
    // },
    // externals:{
    //   //不打包jQqery,则需要手动引入
    //   jquery:'jQuery'
    // },

    //RAM
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:3000,
        hot:true//HMR
    }
}
