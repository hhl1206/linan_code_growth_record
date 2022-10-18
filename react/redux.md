react 是简单的轻量级视图层框架，它只能做视图层（UI）方面的东西。react 中的组件通信是十分繁琐的，比如说子组件父组件之间的通信，子组件想要改变父组件的状态，需要父组件提供一个修改的方法给子组件，子组件调用父组件中的方法，才能改变，但是这种方法有点麻烦。
做大型项目，如果只用 react 是开发不出来的，需要一个视图层框架+一个数据层框架（redux）
redux 管理视图层的状态。
redux 是一个用来管理数据状态和 UI 状态的 javascript 应用工具。随着 javascript 单页应用（SPA）开发日趋复杂，javascript 需要管理比任何时候都要多的 state（状态），redux 就是降低管理难度的。
redux 不是只有 react 能用，Redux 支持 React，Angular、jQuery 甚至纯 JavaScript。

# 1. redux 工作流程
