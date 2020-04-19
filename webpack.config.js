/*
  ���й������߶��ǻ���nodeƽ̨���У�
  ģ�黯Ĭ�ϲ���commomjs
*/

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolve } = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:resolve(__dirname,'build')
    },
    //loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
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
        })
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
