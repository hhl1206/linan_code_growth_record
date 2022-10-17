Electron 运行流程
命令：electron .

执行 Electron 时，它会先找 package.json 文件中的 main 方法（主进程）；
main 方法对应的文件后，找 loadFile，这里就是启动了一个渲染进程，就是我们的页面 UI；
在这个渲染进程中我们可以通过 IPC 执行任务和获取信息。
package.json -> 主进程文件（main.js) -> 读取页面布局和演示 -> IPC 执行任务和获取信息
一个 Electron 程序有且只有一个主进程。

什么是渲染进程？
打开的每一个窗口就是一个渲染进程。每一个主进程可以打开多个窗口，也就是可以打开多个渲染进程
mainWindow.loadFile("index.html");

在渲染进程打开一个窗口：
利用 remote 模块。
由于 remote 模块在 Electron 12 废弃，并将在 Electron 14 被移除。 由@electronic/remote 模块替代。

1. 安装@electronic/remote。
   yarn add --dev @electronic/remote
2. 在主进程中
   require("@electron/remote/main").initialize();
   // mainWindow 是主进程中 new BroswerWindow 的变量
   require("@electron/remote/main").enable(mainWindow.webContents);

目录：
main.js：入口文件
package.json：设置入口文件等配置
main 文件夹：与主进程相关的
render 文件夹：与渲染进程相关的

菜单的创建：
menu.js

绑定快捷键：ctrl+n
示例文件 menu.js
accelerator: "ctrl+n",

做一个右键菜单：
点击右键是在渲染进程中，所以需要在渲染进程中（html 文件)添加一个右键绑定事件。
示例文件：demo2.html;对应的 js 文件--demo2.js

通过链接打开浏览器
示例:demo3.html
Electron 通过 a 标签跳转链接，默认是在我们设置的渲染进程窗口中打开链接。如何在点击 a 标签后，在浏览器中打开链接？

在应用中嵌入一个网页和打开子窗口
方案：不使用 loadFile，使用标签式的嵌入——browserView
BrowserView 是主进程中才能使用的，所以要设置在主窗口中
window.open 和 BrowserWindow 是不同的
window.open：打开子窗口
BrowserWindow：打开一个窗口
示例文件：demo3.html

子窗口和父窗口通信
示例：popup_page.html

Electron 中对话框分为三个：选择文件对话框、保存文件对话框、确认对话框。

1. 文件选择对话框
   示例：demo4.html
   打开选择文件对话框：dialog.showOpenDialog()方法，它是在主线程中使用的。
   它有两个参数，一个是设置基本属性，另一个是回调函数。如果是异步，可以使用 then 来实现。
   属性：
   title ： String (可选)，对话框的标题
   defaultPath ： String (可选),默认打开的路径
   buttonLabel ： String (可选), 确认按钮的自定义标签，当为空时，将使用默认标签
   filters ： 文件选择过滤器，定义后可以对文件扩展名进行筛选
   properties：打开文件的属性，比如打开文件还是打开文件夹，甚至是隐藏文件。
2. 保存文件对话框
   示例：demo4.html
3. 消息对话框
   示例：demo4.html

断网提醒功能
示例：demo5.html
注意，桌面电脑，禁用网络需要把虚拟机和其他的网络一起金庸才生效。

底部通知消息制作
示例：demo6.html

Electron 注册全局快捷键

Electron 剪切板功能
