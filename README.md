# v2c
基于vue2与element UI 低仿antd-pro-table
如果之前你用过react及antd-pro-table，那么这个vue组件对你来说会很简单；
里边内置了所有了element-ui组件，使用时仅需移除原element-ui即可


## 核心组件
### cn-form
### cn-table

## 安装
```
npm install @lirl-cn/v2c
yarn add @lirl-cn/v2c
```
## 使用
``` ts
import CnV2C from '@lirl-cn/v2c';
import request from '@/utils/request'; // 你自己的request方法
Vue.use(CnV2C, {
  table: { // 挂载全局一些公共方法，可以避免每个页面使用时配置
    request
  }
})
```