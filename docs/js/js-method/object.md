# 对象操作

## 1. 检测对象是否为空

该方法用于检测一个 JavaScript 对象是否为空：

```js
const isEmpty = obj =>
	Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
```

## 2. 筛选对象属性

```js
const pick = (obj, ...props) =>
	Object.fromEntries(Object.entries(obj).filter(([k]) => props.inclues(k)));

pick({ a: 1, b: 2, c: 3 }, "a", "b"); // {a:1,b:2}
```
