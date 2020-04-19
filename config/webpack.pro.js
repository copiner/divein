
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolve } = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:resolve(__dirname,'../build')
    },
    //loader
    module:{
        rules:[
            {
              test:/\.js$/,
              exclude:/node_modules/,
              loader:'eslint-loader',
              options:{
                  fix:true//自动修复
              }
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
            minify:false
        }),
        new MiniCssExtractPlugin({
            //options
            filename:'css/index.css'
        })
    ],

    //mode
    mode:'production'
}
