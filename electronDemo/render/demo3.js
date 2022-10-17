/*
 * @Author: linan
 * @Date: 2022-10-14 16:21:43
 * @Last Modified by: linan
 * @Last Modified time: 2022-10-17 11:00:07
 */

/**
 * 浏览器中打开链接
 */
var { shell } = require("electron");

var aHref = document.querySelector("#aHref");

aHref.onclick = function (e) {
  // 阻止默认行为，避免直接在窗口打开链接
  e.preventDefault();
  // 通过浏览器打开链接
  var href = this.getAttribute("href");
  shell.openExternal(href);
};

/**
 * 打开子窗口
 */
var mybtn = document.querySelector("#mybtn");
mybtn.onclick = function (e) {
  // window.open("https://www.baidu.com/");
  window.open("./popup_page.html");
};

/**
 * 这里是父窗口的js
 * 监听子窗口向父窗口传递的东西
 */
window.addEventListener("message", (msg) => {
  // msg：子窗口传递过来的对象
  const mytext = document.querySelector("#mytext");
  mytext.innerHTML = JSON.stringify(msg.data);
});
