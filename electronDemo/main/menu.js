/*
 * @Author: linan
 * @Date: 2022-10-14 15:37:05
 * @Last Modified by: linan
 * @Last Modified time: 2022-10-14 16:15:37
 */
/**
 * 做一个桌面端的菜单
 * 主进程直接引用的，所以这个文件中的新建窗口不需要remote
 */
const { Menu, BrowserWindow } = require("electron");
var template = [
  {
    label: "凤来仪洗浴会所",
    submenu: [
      {
        label: "精品SPA",
        // 加速器，快捷键
        accelerator: "command+n",
        click: () => {
          let win = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
              nodeIntegration: true,
            },
          });
          win.loadFile("yellow.html");
          win.on("close", () => {
            win = null;
          });
        },
      },
      { label: "泰式按摩" },
    ],
  },
  {
    label: "大浪淘沙洗浴中心",
    submenu: [{ label: "牛奶玫瑰雨" }, { label: "自助食堂" }, { label: "KTV" }],
  },
];

/**
 * 构建模版
 * 如果不构建模版是不能使用的
 */
var m = Menu.buildFromTemplate(template);
// 设置菜单
Menu.setApplicationMenu(m);
