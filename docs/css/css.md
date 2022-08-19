# vw在pc端包含滚动条问题

在pc端，不给body设 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow#%E5%80%BC" target="_blank">overflow:overlay</a> 时，滚动条会占有宽度，而100vw会包含滚动条，就会导致 100%width != 100vw  
解决：  
1.在开始文件添加以下js,会实时计算滚动条宽度
```js
    function _calculateScrollbarWidth() {
        document.documentElement.style.setProperty(
            "--scrollbar-width",
            window.innerWidth -
                document.documentElement.clientWidth +
                "px"
        );
    }
    // recalculate on resize
    window.addEventListener("resize", _calculateScrollbarWidth, false);
    // recalculate on dom load
    document.addEventListener(
        "DOMContentLoaded",
        _calculateScrollbarWidth,
        false
    );
    // recalculate on load (assets loaded as well)
    window.addEventListener("load", _calculateScrollbarWidth);
```
2.在scss中使用   
```scss
$ue-width: 1366;  //设计稿宽度
@function px2vw($px) {
    @return calc($px * ((100vw - var(--scrollbar-width)) / $ue-width));
}

.test{
    width: px2vw(100)  //无需单位
}
```

## 不同尺寸适配（带css锁）
```scss
$ue-width: 800; //设计稿宽度
$max-width: 800px; //最大宽度
$min-width: 200px; //最小宽度
$current-width: clamp($min-width, 100vw, $max-width); //当前宽度
@function px2vw($px) {
    @return calc($px * $current-width / $ue-width);
}
.test {
    width: px2vw(400);
    height: px2vw(200);
    background-color: aquamarine;
    color: #000;
    font-size: px2vw(100);
}
```
```scss
/** 
  * @param {Number} $value - 理想尺寸基数，不带任何单位，设计稿对应的元素尺寸值，eg 设计稿元素宽度是500，$value = 500 
  * @param {Number} $idealViewportWidth - 理想视窗宽度基数，不带单位，设计稿的宽度 
  * @param {String} $min - 最小视窗宽度 
  * @param {String} $max - 最大视窗宽度 
**/ 
@function scalePixelValue($value, $idealViewportWidth: 1600, $min: 320px, $max: 3480px) { 
    @return calc( #{$value} * (clamp(#{$min}, 100vw, #{$max}) / #{$idealViewportWidth}) ) 
}
```
js中使用
```ts
/** 
  * @param {Number} value - 元素的理想值基数，对应设计稿上的值 
  * @param {Number} idealViewportWidth - 理想视窗宽度，对应设计稿宽度 
**/ 
const scalePixelValue = (value:number, idealViewportWidth:number = 1600) => { 
    return value * (window.innerWidth / idealViewportWidth) 
}
```