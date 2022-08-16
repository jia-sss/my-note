# 五、颜色操作

## 1. 将RGB转化为十六机制
该方法可以将一个RGB的颜色值转化为16进制值：
````js
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(255, 255, 255);  // '#ffffff'
````

## 2. 获取随机十六进制颜色
该方法用于获取一个随机的十六进制颜色值：
````js
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

randomHex();
````