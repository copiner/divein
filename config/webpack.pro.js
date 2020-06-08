/*
oneOf
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolve } = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'index-[contentHash:10].js',
        path:resolve(__dirname,'../build')
    },
    //loader
    module:{
        rules:[
            //oneOf:[],
            {
              test:/\.js$/,
              exclude:/node_modules/,
              use:[
                {
                  loader:'babel-loader',
                  options:{}
                },
                // {
                //   loader:'eslint-loader',
                //   options:{
                //       fix:true//自动修复
                //   }
                // }
              ]

            },
            {
                test:/\.css$/,
                use:[
                    //'style-loader',//insert create <style> --> <head>
                    MiniCssExtractPlugin.loader,//replace style-loader <link>  //bug path
                    'css-loader',//css->js
                    {
                      loader:'postcss-loader',
                      options:{
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
            template:'./src/index.html',
            minify:{
              collapseWhitespace:true,
              removeComments:true
            }
        }),
        new MiniCssExtractPlugin({
            //options
            filename:'index-[contentHash:10].css'
        }),
        // new webpack.DllReferencePlugin({
        //   manifest:resolve(__dirname,'../dll/manifest.json')
        // })
    ],

    //mode
    mode:'production',//生成模式，默认会加载一些插件，比如压缩js代码的UgfilyJsPlugin
    devtool:'source-map'
}
