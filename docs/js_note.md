#### 浏览器自带对话窗
```js
if(window.confirm('确定执行下面操作吗？')){
    //confirm 点确定返回true  取消返回false
}
```

## 数组方法
### reduce <https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>
```js
let arr = [1, 2, 3, 4];
//pre 上一次计算的值  current当前值，做累加
let a = arr.reduce((pre,current)=>{pre + current})
// a = 1 + 2 + 3 + 4
```

## 浏览器不借助xhr发请求
 fetch  window自带  兼容性不好，老版本浏览器不兼容
 ```js
 fetch('http://xxxxx').then(
     //联系服务器成功
     res => {
         return res.json()
     }
 ).then(
     //获取数据成功
     data => {
         console.log(data)
     }
 ).catch(
     err => cosole.log(err)
 )
 ```
 async await 写法
 ```js
 try{
     let res = await fetch(url)
     let data = await res.json()
     console.log(data)
 } catch(err) {
     console.log(err)
 }
 ```
