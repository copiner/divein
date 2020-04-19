/*
  dev: webpack ./src/index.js -o ./build/bound.js --mode=development
  pro: webpack ./src/index.js -o ./build/bound.js --mode=production
*/

import data from './static/name.json';

import './icon/iconfont.css'; // font

import './css/index.css';
import './css/name.css';

//console.log(data);

function add(x, y) {
  return x + y;
}

//console.log(add(1, 2));

const dul = (x, y) => {
  return x * y;
};

//console.log(dul(2,4));

const porm = new Pormise(resolve)=>{
  setTimeout(()=>{
    resolve()
  },1000)
}

pro().then().catch()
