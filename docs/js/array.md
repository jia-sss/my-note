# 数组方法

## reduce  <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">文档</a>
```js
let arr = [1, 2, 3, 4];
//pre 上一次计算的值  current当前值，做累加
let a = arr.reduce((pre,current)=>{pre + current})
// a = 1 + 2 + 3 + 4
```