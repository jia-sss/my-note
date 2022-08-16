# 二、字符串处理

## 1. 字符串首字母大写
该方法用于将英文字符串的首字母大写处理：
````js
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

capitalize("hello world")  // Hello world
````

## 2. 翻转字符串
该方法用于将一个字符串进行翻转操作，返回翻转后的字符串：
````js
const reverse = str => str.split('').reverse().join('');

reverse('hello world');   // 'dlrow olleh'
````

## 3. 随机字符串
该方法用于生成一个随机的字符串：
````js
const randomString = () => Math.random().toString(36).slice(2);

randomString();
````

## 4. 截断字符串
该方法可以从指定长度处截断字符串:
````js
const truncateString = (string, length) => string.length < length ? string : `${string.slice(0, length - 3)}...`;

truncateString('Hi, I should be truncated because I am too loooong!', 36)   // 'Hi, I should be truncated because...'
````

## 5. 去除字符串中的HTML
该方法用于去除字符串中的HTML元素：
````js
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
````