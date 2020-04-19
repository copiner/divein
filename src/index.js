/*
  dev: webpack ./src/index.js -o ./build/bound.js --mode=development
  pro: webpack ./src/index.js -o ./build/bound.js --mode=production
*/

import data from './static/name.json'

console.log(data);

import './icon/iconfont.css' //font

import './css/index.css'

function add(x,y){
    return x + y;
}

console.log(add(1,2));
