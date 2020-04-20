/*
  所有构建工具都是基于node平台运行，
  模块化默认采用commomjs

  HMR

  CSS style-loader内部实现了样式模块HMR
  JS 没有实现HMR,针对非入口文件，则通过以下实例实现
  if(module.hot){
    //module.hot 为 true 则开启HMR功能
    module.hot.accept('./js/index.js',()=>{
      //监听index.js变化，发生变化，执行该回调函数
      ...
    })
  }

  source map 英语翻译
  实现源代码与构建后代码之间的映射关系
  source-map
  inline-source-map
  hidden-source-map
  eval-source-map
  cheap-source-map

*/

const HtmlWebpackPlugin = require('html-webpack-plugin');
//const PostcssPresetEnv = require('postcss-preset-env');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const { resolve } = require('path');

process.env.NODE_ENV = "development";

module.exports = {
    entry: './src/index.js',
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
        //压缩css
        //new OptimizeCssAssetsWebpackPlugin()
    ],

    //mode
    mode:'development',
    devtool:'eval-source-map',
    //RAM
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:3000,
        hot:true//HMR
    }
}
