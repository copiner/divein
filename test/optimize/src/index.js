
import count from './sub';

console.log('yeeeep');

import(/* webpackChunkName:'add' */'./add').then((v)=>{
    console.log(v);
})

console.log(sub(5,2));
