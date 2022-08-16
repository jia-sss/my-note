# 三、数组处理

## 1. 从数组中移除重复项
该方法用于移除数组中的重复项：
````js
const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]));
````

## 2. 判断数组是否为空
该方法用于判断一个数组是否为空数组，它将返回一个布尔值：
````js
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);  // true
````

## 3. 合并两个数组
可以使用下面两个方法来合并两个数组：
````js
const merge = (a, b) => a.concat(b);

const merge = (a, b) => [...a, ...b];
````