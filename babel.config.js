module.exports = {
  presets: [
    ["@babel/preset-env",{
        targets: {//兼容性处理
            edge:"17",
            firefox:"60",
            chrome:"58",
            safari:"10",
            ie: "9"
        },
        corejs: {//core-js
          version: 3,
          proposals: true
        },
        //实现根据需要加载
        useBuiltIns:"usage"
    }]
  ]
}
