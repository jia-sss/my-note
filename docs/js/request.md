# 请求

## fetch方法
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

## async await 写法
await只等待promise对象
 ```js
 try{
     let res = await fetch(url)
     let data = await res.json()
     console.log(data)
 } catch(err) {
     console.log(err)
 }
 ```