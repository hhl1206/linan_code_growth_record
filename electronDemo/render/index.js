/*
 * @Author: linan
 * @Date: 2022-10-14 11:06:20
 * @Last Modified by: linan
 * @Last Modified time: 2022-10-14 14:17:48
 */
//  不配置webPreferences: { nodeIntegration: true }的话，就无法引入fs
var fs = require("fs");
window.onload = function () {
  var btn = this.document.querySelector("#btn");
  var mybody = this.document.querySelector("#mybody");
  // 监听index.html中btn的点击事件
  btn.onclick = function () {
    fs.readFile("./xiaojiejie.txt", (err, data) => {
      mybody.innerHTML = data;
    });
  };
};
