1. 多行文字省略

```
.div {
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  text-overflow: ellipsis;
  overflow:hidden;
}
```

2. 项目中关于忽略
   忽略样式方法 1 加入 CSS 注释强制声明忽略下一行

```
/* autoprefixer: ignore next */
-webkit-box-orient: vertical;
```

忽略样式方法 2 加入 CSS 注释强制声明注释中间多行

```
/* autoprefixer: off */
-webkit-box-orient: vertical;
/* autoprefixer: on */
```

忽略样式方法 3 写成行内样式

```
<View
  style={{
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    'text-overflow': 'ellipsis',
    overflow: 'hidden',
    'line-height': 2
  }}
>
  这是要省略的内容这是要省略的内容这是要省略的内容
</View>
```
