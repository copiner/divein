/*
  所有构建工具都是基于node平台运行，
  模块化默认采用commomjs
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
//const PostcssPresetEnv = require('postcss-preset-env');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const { resolve } = require('path');

process.env.NODE_ENV = "development";

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
              use:[
                {
                  //eslint-plugin-import eslint-config-airbnb/ eslint-config-airbnb-base
                  loader:'eslint-loader',//检查规则eslint.config.js
                  options:{

                  }
                },
                {//babel-loader @babel/preset-env @babel/core
                  loader:'babel-loader',
                  options:{
                    /*
                    @babel/preset-env只能基本转换，不能转换如promise等
                    转换promise等，需要@babel/polyfill,在入口文件引入import @babel/polyfill, 这种方式导致代码冗余
                    不过可以根据需求，按需做兼容性处理，加载对应库即可 core-js

                    配置参照babel.config.js
                    @babel/preset-env
                    */
                    // presets:[
                    //   ['@babel/preset-env',{
                    //     useBuiltIns:'useage'
                    //   }]
                    // ]
                  }
                }
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
        //压缩css
        //new OptimizeCssAssetsWebpackPlugin()
    ],

    //mode
    mode:'development',
    //RAM
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:3000
    }
}
