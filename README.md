### webpack

所有构建工具都是基于node平台运行，模块化默认采用commomjs


### Browserslist
Browserslist config can be defined in .browserslistrc file or in browserslist section of package.json.

Browserslist is a config to share target browsers between different front-end tools.

Browserslist is used by:
```
developers
Autoprefixer
Babel
postcss-preset-env
postcss-normalize
ESLint
Stylelint
```

All tools will find target browsers automatically, when you add the following to package.json:

```
  "browserslist": [
    "defaults",
    "not IE 11",
    "not IE_Mob 11",
    "maintained node versions",
  ]
```
Or in .browserslistrc config:

```
# Browsers that we support

defaults
not IE 11
not IE_Mob 11
maintained node versions
```

### HMR

CSS style-loader内部实现了样式模块HMR
JS 没有实现HMR,针对非入口文件，则通过以下实例实现
if(module.hot){
//module.hot 为 true 则开启HMR功能
module.hot.accept('./js/index.js',()=>{
  //监听index.js变化，发生变化，执行该回调函数
  ...
})
}

### source map 英语翻译
实现源代码与构建后代码之间的映射关系
```
source-map
inline-source-map
hidden-source-map
eval-source-map
cheap-source-map
```
###缓存

babel缓存 cacheDirectory:true
文件缓存
hash
chunkHash:每块代码hash值，js文件引入css，则为一个代码块，css js文件hash值相同
contentHash:根据内容hash

###tree shaking:去除无用代码
ES modules 并且为production模式下
```
sideEffects:[*.css]
```

### codeSplit
```
optimization:{
  splitChunks:{
    chunks:'all'//将node_modules内容单独打包
  }
},
```
js文件单独打包,import引入该文件
```
import(/* webpackChunkName:'mod' */'./js/mod.js').then(({div,sub})=>{
  console.log(div(8,2));
}).catch(()=>{
  console.log("error")
})

```

### Module Methods

Dynamic expressions in import()

Magic Comments

```
//懒加载预加载,通过路由或IO事件实现懒加载
//import { lazy } from './js/lazy'
document.getElementById("lazy").onclick = function(){

  //console.log(lazy(8,5)); webpackPreFetch:true预加载
  import(/* webpackChunkName:'mod',webpackPreFetch:true */'./js/lazy.js').then(({lazy})=>{
    console.log(lazy(8,5));
  }).catch(()=>{
    console.log("error")
  })

}
```
