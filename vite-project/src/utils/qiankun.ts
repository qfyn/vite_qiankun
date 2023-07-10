// src/qiankun/index.ts
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'vue3-1', // 子应用名称，跟package.json一致
    entry: '//localhost:3000', // 子应用入口，本地环境下指定端口
    container: '#sub-container', // 挂载子应用的dom
    activeRule: '/vue3-1', // 路由匹配规则
    props: {} // 主应用与子应用通信传值
  },
  {
    name: 'app-vue2',
    entry: '//localhost:7002',
    container: '#sub-container',
    activeRule: '/app/app-vue2',
    props: {}
  }
])

start()
