# 前端基础建设与架构

## 前端技术发展回顾和架构升级之路

1. 前端技术发展轨迹：
   后端 MVC 模式+前端静态页面--Ajax 技术--》前后端分离+前端 MVC 框架--》前后端分离+前端 MVVM 框架--》前后端分离+SPA 单页面应--NodeJS 技术--》前后端同构+SSR--serverless-》前端向后工程化、基础设施完善的开发体系

- MVC
  Modal 模型层(数据存储和读取)+controller 控制层(对数据进行处理并实现业务逻辑需求)+view 视图层(展示数据)。
  每次请求都对应了一个静态页面的生成过程，Web1.0 时代。
- Ajax
  2005 年，Ajax 技术出现，Web1.0 到 Web2.0，前后端分离概念。前端通过 Ajax 获取数据进行页面的展现和交互，后端通过 RestFul 接口与前端进行交互。由于需要前端进行大量地处理数据，由此，MVC 框架得到了发展。
- MVVM
  MVVM(view+viewModal+Modal)与 MVC 区别：MVVM 采用双向数据绑定（Data Binding)或自动渲染更新。View 层变动可以自动反映到 viewModal 层。Angular 和 Vue 都是采用这种，React 官方说自己只是一个 View 层类库，但是 React 搭配数据状态管理生态，也符合 MVVM 模式。
- SSR
  服务端渲染直出，提升首屏性能和 SEO 友好目的。
