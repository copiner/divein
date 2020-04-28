const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build'),//base path
        //publicPath:'/'
    },
    module:{
        rules:[
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'development',
    resolve:{
      alias:{
        $css:resolve(__dirname, 'src/css')
      },
      extensions:['.js','json'],//后缀名
      modules:[resolve(__dirname, '../../node_modules'), 'node_modules']
    },
    devServer:{//看源码
        contentBase:resolve(__dirname,'build'),
        //watchContentBase:true,
        compress:true,
        port:3000,
        hot:true,
        clientLogLevel:'none',
        quiet:true,
        proxy:{
          '/api':{
            target:'http://localhost:9000',
            pathRewrite:{
              '^/api':''
            }
          }
        }

    }
};
