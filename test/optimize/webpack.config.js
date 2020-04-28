const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'[name]-[hash:10].js',
        path:resolve(__dirname,'build'),
        publicPath:'/',
        chunkFilename:'[name]-[hash:10].js',//import('./add')...
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    mode:'production',
    optimization:{//默认值
      splitChunks:{
        chunks:'all',
        minSize:30*1024,
        maxSize:0,
        minChunks:1,
        maxAsyncRequests:5,
        maxInitialRequests:3,
        automaticNameDelimiter:'~',
        name:true,
        cacheGroups:{
          vendors:{
            test:/[\\/]node_modules[\\/]/,
            priority:10,
          },
          default:{
            minChunks:2,
            priority:-20,
            reuseExistingChunk:true
          }
        }

      },
      // runtimeChunk:{//!!!
      //   name:e=> `runtime-${e.name}`
      // },
      // minimizer:[
      //   //compress --> js css
      //   //terser-webpack-plugin
      // ]
    }
};
