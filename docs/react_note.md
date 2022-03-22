## 组件标签体传值（插槽）
```jsx
//父
<Test>123</Test>
//子
this.props.children
//123
```
## 组件间传值
### 子传父  
传函数  

```jsx
    test = (childData)=>{
        ...
    }

    <Child test={this.test}></Child>
```

## react配置代理
src下新建 setupProxy.js
```js
const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        //请求地址要加 api1 
        proxy('api1',{ //有 /api1 前缀的触发该代理
            target:'http://localhost:5000', //目标请求地址
            changeOrigin:true,  //控制服务器收到的请求头中Host字段的值，默认false ，建议true
            // 例： :3000请求:5000    服务端收到请求Host  true为 :5000 false为 :3000
            pathRewrite:{'^/api1':''} //把 /api1 替换为 ‘’ 后端路由没有 /api1 
        }),
        proxy('api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),
    )
}
```

## 消息订阅与发布 （组件间通信）
#### 1.工具库
pubsubjs  
```
npm i pubsub-js
```
```js
//引入
import PubSub from 'pubsub-js'
//发布消息
PubSub.publish('MY TOPIC', 'hello world!');
//同步发布消息
PubSub.publishSync('MY TOPIC', 'hello world!');
//订阅消息，接收消息
const token = PubSub.subscribe('MY TOPIC', (msg,data)=>{  //msg消息名，data接收的数据
    //...
});
//取消订阅
PubSub.unsubscribe(token);
```

 ## react 路由
     npm i react-router-dom
```jsx
import {Link,BrowserRouter} from 'react-router-dom';
//BrowserRouter包裹 App组件
<BrowserRouter>
    <App />
</BrowserRouter>
//路由链接
<Link className="xxx" to="test">test</Link>
//注册路由
<Routes>
    <Route path="test" element={<Test/>} />
</Routes>
```
### 重定向
```jsx
//写最后，匹配不上时匹配
<Redirect to="/test"></Redirect>

//6.0版本的重定向写法:  
<Route path="*" element={<Navigate to="/about" />}/>
```
### 嵌套路由
```jsx
//v6
//嵌套路由要在父组件里用 <Outlet /> 做出口
<Route path="/home/*" element={<Home />}>
    <Route path="zi" element={<Zi/>}/>
</Route>
```
### 路由传参
```jsx
//v5
//params参数，/后面参数
<Link to={`/test/${id}/${tit}`}>...</Link>
//组件里接收   this.props.match.params
<Route path="/test/:id/:tit" component={test}></Route>
//v6
//接收参数
import { useParams } from "react-router-dom";
export default function Invoice() {
  let params = useParams();
  return <h2>{params.xxx}</h2>;
}

//v5 search参数   像ajax的query参数
<Link to={`/test/?id=${id}&tit=${tit}`}>...</Link>
//组件里接收   this.props.location.search
<Route path="/test" component={test}></Route>
//v6
let [searchParams,setSearchParams] = useSearchParams();
//传
setSearchParams({id:111,tit:xxx})
//接收
searchParams

//v5 state参数
<Link to={{pathname:'/test',state:{id:11,tit:'qwe'}}}>...</Link>
//组件里接收   this.props.location.state
<Route path="/test" component={test}></Route>
//v6 用useLocation
```
### 编程式路由导航
```jsx
//v5
this.props.history.push(`/test/${id}`)
this.props.history.replace(`/test/${id}`)

this.props.history.push(`/test?id=${id}&tit=${tit}`)
this.props.history.replace(`/test?id=${id}&tit=${tit}`)

this.props.history.push(`/test`,{id,tit})
this.props.history.replace(`/test`,{id,tit})
```
### withRouter
```jsx
//v5
class Test extends Component {
    //....
}
//高阶函数  接收普通组件 让一般组件在组件内使用路由方法
export default withRouter(Test)
```
###  区别
1. 底层原理不一样：  
  BrowserRouter使用的是H5的history API，不兼容IE9及以下版本.  
  HashRouter使用的是URL的哈希值.  
2. ur1表现形式不一样  
  BrowserRouter的路径中没有＃，例如：1ocalhost:3000/demo/test  
  HashRouter的路径包含＃，例如： 1oca1host:3000/#/demo/test  
3. 刷新后对路由state参数的影响  
  (1).BrovserRouter没有任何影啊，因为state保存在history对象中  
  (2).HashRouter刷新后会导致路由state参数丢失.  
4. 各注：HashRouter可以用于解决一些路径错误相关的问题。  