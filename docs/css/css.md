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
    width: px2vw(100)
}
```