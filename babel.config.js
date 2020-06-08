/*
@babel/preset-env 主要作用是对我们所使用的并且目标浏览器中缺失的功能进行代码转换和加载 polyfill，
在不进行任何配置的情况下，
@babel/preset-env 所包含的插件将支持所有最新的JS特性(ES2015,ES2016等，不包含 stage 阶段)，将其转换成ES5代码

需要说明的是，@babel/preset-env 会根据你配置的目标环境，生成插件列表来编译。对于基于浏览器或 Electron 的项目，
官方推荐使用 .browserslistrc 文件来指定目标环境。
默认情况下，如果你没有在 Babel 配置文件中(如 .babelrc)设置 targets 或 ignoreBrowserslistConfig，@babel/preset-env 会使用 browserslist 配置源。

@babel/polyfill 模块包括 core-js 和一个自定义的 regenerator runtime 模块，可以模拟完整的 ES2015+ 环境
前端发展日新月异,@babel/polyfill 已经被废弃，需单独安装 core-js 和 regenerator-runtime 模块

@babel/preset-env 提供了一个 useBuiltIns 参数，设置值为 usage 时，就只会包含代码需要的 polyfill 。有一点需要注意：配置此参数的值为 usage ，必须要同时设置 corejs
@babel/preset-env设置useBuiltIns为usage后，可以根据targets环境不同而自动加载regenerator-runtime，自动解析async函数为generator函数


*/
module.exports = {
  presets: [//通过使用或创建一个 preset 即可轻松使用一组插件,没有preset，针对不一样语法需要单独配置插件plugin
    ["@babel/preset-env",{
        targets: {//兼容性处理
            edge:"17",
            firefox:"60",
            chrome:"58",
            safari:"10",
            ie: "9"
        },
        corejs: {
          version: 3,
          proposals: true
        },
        //实现根据需要加载
        useBuiltIns:"usage"
    }]
  ],
  plugins:[
    ["@babel/plugin-transform-runtime",{
      corejs:3
    }]
  ]
}


/*

使用 @babel/plugin-transform-runtime 插件，所有帮助程序都将引用模块 @babel/runtime，这样就可以避免编译后的代码中出现重复的帮助程序，有效减少包体积

A plugin that enables the re-use of Babel's injected helper code to save on codesize.
npm install --save-dev @babel/plugin-transform-runtime

and @babel/runtime as a production dependency (since it's for the "runtime").

npm install --save @babel/runtime

给 @babel/plugin-transform-runtime 配置 corejs 是如此的完美，既可以将帮助函数变成引用的形式，
又可以动态引入 polyfill，并且不会污染全局环境。

babel src --out-dir lib --watch
*/
