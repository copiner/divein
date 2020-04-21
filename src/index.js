/*
  dev: webpack ./src/index.js -o ./build/bound.js --mode=development
  pro: webpack ./src/index.js -o ./build/bound.js --mode=production
*/

import data from './static/name.json';
import sum from './js';
import { add } from './js/cal';
import $ from 'jquery'

console.log($);

import './icon/iconfont.css'; // font
import './css/index.css';
import './css/name.css';

console.log(data);

sum(1, 2, 3, 4);

add(3, 4);


import(/* webpackChunkName:'mod' */'./js/mod.js').then(({div,sub})=>{
  console.log(div(8,2));
}).catch(()=>{
  console.log("error")
})

//懒加载预加载,通过路由或IO事件实现懒加载
//import { lazy } from './js/lazy'
document.getElementById("lazy").onclick = function(){

  //Magic Comments webpackPreFetch:true预加载
  import(/* webpackChunkName:'lazy' */'./js/lazy.js').then(({lazy})=>{
    console.log(lazy(8,5));
  }).catch(()=>{
    console.log("error")
  })

}

//import {lazy} from './js/lazy'
if (module.hot) {
  // module.hot 为 true 则开启HMR功能
  module.hot.accept('./js/index.js', () => {
    // 监听index.js变化，发生变化，执行该回调函数
    log();
  });
}
