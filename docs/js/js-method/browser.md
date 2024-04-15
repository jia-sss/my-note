# 六、浏览器操作

## 1. 复制内容到剪切板
该方法使用 navigator.clipboard.writeText 来实现将文本复制到剪贴板：
````js
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("Hello World");
````

## 2. 获取浏览器cookie值
```js
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"
```

## 3. 清除所有cookie
该方法可以通过使用 document.cookie 来访问 cookie 并清除存储在网页中的所有 cookie：
```js
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```

## 4. 获取选中的文本
该方法通过内置的 getSelection 属性获取用户选择的文本：
```js
const getSelectedText = () => window.getSelection().toString();

getSelectedText();
```

## 5. 检测是否是黑暗模式
该方法用于检测当前的环境是否是黑暗模式，它是一个布尔值：
```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

console.log(isDarkMode)
```

## 6. 滚动到页面顶部
该方法用于在页面中返回顶部：
```js
const goToTop = () => window.scrollTo(0, 0);

goToTop();
```

## 7. 判断当前标签页是否激活
该方法用于检测当前标签页是否已经激活：
```js
const isTabInView = () => !document.hidden; 
```

## 8. 判断当前是否是苹果设备
该方法用于检测当前的设备是否是苹果的设备：
```js
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

isAppleDevice();
```

## 9. 是否滚动到页面底部
该方法用于判断页面是否已经底部：
```js
const scrolledToBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```

## 10. 重定向到一个URL
该方法用于重定向到一个新的URL：
```js
const redirect = url => location.href = url

redirect("https://www.google.com/")
```

## 11. 打开浏览器打印框
该方法用于打开浏览器的打印框：
```js
const showPrintDialog = () => window.print()
```

## 12. 浏览器自带对话窗
```js
if(window.confirm('确定执行下面操作吗？')){
    //confirm 点确定返回true  取消返回false
}
```

## 13. 从URL中获取查询参数
```js
const getParameters = (URL) => {
URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
return JSON.stringify(URL);
};

getParameters(window.location)
// Result: { search : "easy", page : 3 }
```

## 14. 解析url中的参数
```js
const parseQuery = (url) => {
    q = {};
    url.replace(/([^?&=]+)=([^&]+)/g, (_,k,v) => (q[k] = v));
    return q;
}

parseQuery("http://a.com/?a=1&b=2"); // {a:1,b:2}
parseQuery("a=1&b=2"); // {a:1,b:2}
```