# React+antD实战项目

React项目实战，模拟后台管理系统

## 项目的基本结构

api: ajax请求的模块
components: 非路由组件
pages: 路由组件
App.js: 应用的根组件
index.js: 入口js


## antd

- 按需打包
- 自定义主题 未实现
- 使用antd的组件


## 路由

- 下载包: react-router-dom
拆分应用路由:
  Login: 登陆
  Admin: 后台管理界面
注册路由:
  `<BrowserRouter>
  <Switch>
  <Route path='' component={}/>`
 

## axios
1). ajax请求函数模块: api/ajax.js
    封装axios + Promise
    函数的返回值是promise对象  ===> 后面用上async/await
    自己创建Promise
      1. 内部统一处理请求异常: 外部的调用都不用使用try..catch来处理请求异常
      2. 异步返回是响应数据(而不是响应对象): 外部的调用异步得到的就直接是数据了(response --> response.data)
2). 接口请求函数模块: api/index.js
    接口请求函数: 使用ajax(), 返回值promise对象
3). 解决ajax跨域请求问题(开发时)
    办法: 配置代理  ==> 只能解决开发环境
    编码: package.json: proxy: "http://localhost:5000"
4). 对代理的理解
    1). 是什么?
        具有特定功能的程序
    2). 运行在哪?
        前台应用端
        只能在开发时使用
    3). 作用?
        解决开发时的ajax请求跨域问题
        a. 监视并拦截请求(3000)
        b. 转发请求(4000)
    4). 配置代理
        告诉代理服务器一些信息: 比如转发的目标地址
        开发环境: 前端工程师
        生产环境: 后端工程师
## redux
什么?: redux是专门做状态管理的独立第3方库, 不是react插件, 但一般都用在react项目中
作用?: 对应用中状态进行集中式的管理(写/读)
开发: 与react-redux, redux-thunk等插件配合使用

### 登陆模块
1）登陆表单验证
2）存储缓存用户数据(localStorage)
3）实现免登陆
    ** 在login页面清除用户数据时，写在了render函数外部，使得函数在全局作用域下导致其他页面刷新被清除用户
    ** onfinsh函数写在render外部需要bind(this)


## Component与PureComponent
    1). Component存在的问题?
        a. 父组件重新render(), 当前组件也会重新执行render(), 即使没有任何变化
        b. 当前组件setState(), 重新执行render(), 即使state没有任何变化
  
    2). 解决Component存在的问题
        a. 原因: 组件的shouldcomponentUpdate()默认返回true, 即使数据没有变化render()都会重新执行
        b. 办法1: 重写shouldComponentUpdate(), 判断如果数据有变化返回true, 否则返回false
        c. 办法2: 使用PureComponent代替Component
        d. 说明: 一般都使用PureComponent来优化组件性能
  
    3). PureComponent的基本原理
        a. 重写实现shouldComponentUpdate()
        b. 对组件的新/旧state和props中的数据进行浅比较, 如果都没有变化, 返回false, 否则返回true
        c. 一旦componentShouldUpdate()返回false不再执行用于更新的render()
  
    4). 面试题:
        组件的哪个生命周期勾子能实现组件优化?
        PureComponent的原理?
        区别Component与PureComponent?
