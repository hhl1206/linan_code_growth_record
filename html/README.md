# 1. canvas
canvas绘制的是像素点，放大后会失真。但是性能好点。SVG绘制的是矢量图，放大后不会失真，但性能差点。
画大量的动画时，用canvas。
canvas是一个标签。用JavaScript绘制。
- 简单的canvas示例
> 代码文件：canvas1.html
canvas也可以用来播放视频
- 常见的canvas操作
> 代码文件:canvas2.html

> 插播其他知识：
1) 百度通常会把图片转成jfif类型的，因为它的压缩比例高，图片的大小会比原图小些。

2) 为什么用canvas绘制视频？video仅支持mp4,mp4的很容易被盗（下载后就能用）
canvas每隔16ms去video中获取图片,显示在canvas中
屏幕刷新率是60帧/s,所以大概16毫秒刷新一次，人眼低于30帧，就能感觉到卡顿了
3）每一帧中的数据，在getImageData()中可以获取
是一个一组数据由四个值的数组，像素点由四个数据组成（rgba)
4) 可以修改 putImageData():将图像数据放回画布上
> 一般不会这样手动修改图像的数据
- canvas图像数字处理
```
<canvas id='canvas' width="600" height="600"></canvas>
```
属性width和height与style中设置的宽高是不同的
> 代码文件:canvas3.html
说明：

集合了65000张手写的数字图片，一横的数据：784 = 28*28，所以一张手写的数字图片，大小为28*28
想要取出数字：将图画在canvas中，然后截取第一行数据（784个像素点，784条数据），一个像素点是由4个数据构成的（rgba)
>插播其他知识：
1) failed to load resource: the server responded with a status of 404(:8020/favicon:ico:1)
是搜狗浏览器的logo问题：
打开一个页面，默认会请求logo图标，只有第一次打开会去请求，再刷新的时候，不会去请求了。报错这个错的话，那就手动再放一个图标，手动生成一个图标。（ico图片，在线转一下就行）
然后用link方式修改图标`<link src=''>`
2) 为了阻止欺骗，浏览器会追踪 image data。当你把一个“跟canvas的域不同的”图片放到canvas上，这个canvas就成为 “tainted”(被污染的，脏的)，浏览器就不让你操作该canvas 的任何像素。这对于阻止多种类型的XSS/CSRF攻击（两种典型的跨站攻击）是非常有用的。

# 2. xml Paser
XML解析器把XML文档转化为XML DOM对象--可通过javaScript操作的对象，示例：
- 解析文档：把XML文档解析到XML DOM对象中：
```
if(window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest;
} else {
  // code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","books.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
```