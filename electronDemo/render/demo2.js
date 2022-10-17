// 如何在渲染进程中，新打开一个window？即让渲染进程有主进程的能力
// this就是window对象，可以省略
const btn = this.document.querySelector("#btn");

/**
 * BrowserWindow是主进程的方法，渲染进程是没法儿直接使用的,
 * old版本需要使用remote,才能与主进程公用BrowserWindow，
 * remote 模块在 Electron 12 废弃，并将在 Electron 14 被移除。 由@electronic/remote 模块替代。
 */
// const BrowserWindow = require("electron").remote.BrowserWindow;
// 替换为：
const { BrowserWindow } = require("@electron/remote");

let newWin = null;
// 当页面加载完成后，监听事件
window.onload = function () {
  btn.onclick = () => {
    newWin = new BrowserWindow({
      width: 500,
      height: 500,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        // enableRemoteModule: true,
      },
    });
    // 载入文件
    newWin.loadFile("yellow.html");
    newWin.on("close", () => {
      newWin = null;
    });
  };
};

/**
 * 右键菜单响应事件
 */
// Menu是主进程中的事件，现在是在渲染进程，所以需要利用remote
const { Menu, getCurrentWindow } = require("@electron/remote");
// 菜单模版
const rightTemplate = [
  {
    label: "复制",
    // 加速器，快捷键
    accelerator: "ctrl+c",
  },
  {
    label: "粘贴",
    // 加速器，快捷键
    accelerator: "ctrl+v",
  },
];
// 建立菜单
let m = Menu.buildFromTemplate(rightTemplate);

// 响应事件
// 普通的点击事件
// window.addEventListener('click',function() {
// })
// 右键事件
window.addEventListener("contextmenu", function (e) {
  // 阻止默认的响应事件
  e.preventDefault();
  /**
   * 右键响应菜单
   * getCurrentWindow也是主进程中的东西
   */
  m.popup({ window: getCurrentWindow() });
});
