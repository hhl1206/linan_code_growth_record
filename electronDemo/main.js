/*
 * @Author: linan
 * @Date: 2022-10-13 17:53:51
 * @Last Modified by: linan
 * @Last Modified time: 2022-10-17 15:27:27
 */

/**
 * electron主进程，控制打开窗口的所有业务逻辑
 */
var electron = require("electron");

/**
 * 巧记：KTV
 */
// 引用app
var app = electron.app;

// 全局注册的，全局快捷键，必须写在app.onready中
var globalShortcut = electron.globalShortcut;

// 窗口的引用
var BrowserWindow = electron.BrowserWindow;

// 声明要打开的窗口
var mainWindow = null;

/**
 * 创建应用
 * on:监听事件
 * 监听窗口是否准备好的事件
 * app相当于我们的主进程
 */
app.on("ready", () => {
  // 设置主窗口
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    /**
     * 通过Electron读取本地文件
     * 1.该属性使node中的所有东西都能在我们的渲染进程中使用
     * contextIsolation: false,否则提示require is no defined.
     */
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  /**
   * remote 模块在 Electron 12 废弃，并将在 Electron 14 被移除。 由@electronic/remote 模块替代
   * 在主进程中：
   */
  require("@electron/remote/main").initialize();
  require("@electron/remote/main").enable(mainWindow.webContents);

  // 在面板一打开就打开调试模式
  mainWindow.webContents.openDevTools();
  // 引入菜单
  require("./main/menu.js");

  // 全局快捷键
  globalShortcut.register("ctrl+e", () => {
    // 主线程中输出，不是在渲染进程中
    console.log("hhha");
    // 载入一个远程的地址
    // mainWindow.loadFile("https://jspang.com/");
  });
  // 判断注册成功
  let isRegister = globalShortcut.isRegistered("ctrl+e")
    ? "Register Success"
    : "Register fail";
  console.log("全局快捷键注册：", isRegister);

  // 把网页加载进来
  // mainWindow.loadFile("index.html");
  mainWindow.loadFile("demo7.html");

  // BrowserView
  // const BrowserView = electron.BrowserView;
  // const view = new BrowserView();
  // // 设置在主窗口中
  // mainWindow.setBrowserView(view);
  // // 设置样式和属性
  // view.setBounds({ x: 0, y: 300, width: 400, height: 480 });
  // // 具体要嵌入哪个网页
  // view.webContents.loadURL("https://jspang.com/");

  // 当关闭窗口的时候，要记得把mainWindow重置为null，否则内存会占用越来越多
  mainWindow.on("close", () => {
    mainWindow = null;
  });
});

app.on("will-quit", function () {
  // 注销快捷键
  globalShortcut.unregister("ctrl+e");
  // 取消所有的
  globalShortcut.unregisterAll();
});
