/*
  dev: webpack ./src/index.js -o ./build/bound.js --mode=development
  pro: webpack ./src/index.js -o ./build/bound.js --mode=production
*/
import log from './js';
import data from './static/name.json';

import './icon/iconfont.css'; // font

import './css/index.css';
import './css/name.css';

console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

const dul = (x, y) => {
  return x * y;
}

console.log(dul(2,4));

log();

if(module.hot){
  //module.hot 为 true 则开启HMR功能
  module.hot.accept('./js/index.js',()=>{
    //监听index.js变化，发生变化，执行该回调函数
    log()
  })
}
