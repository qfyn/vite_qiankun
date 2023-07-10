import { createApp } from 'vue'
import App from './App.vue'
import { installElementPlus } from '@/plugins/element'
import { installComponents } from '@/components'
import router, { installRouter } from '@/router'
import { installRouterGuards } from '@/router/guard'
import { installStore } from '@/store'
import { installAssets } from '@/plugins/assets'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

// const startApp = () => {
//   const app = createApp(App)

//   // 静态资源
//   installAssets(app)
//   // 路由 VueRouter
//   installRouter(app)
//   // 路由守卫
//   installRouterGuards(router)
//   // 全局状态管理 Pinia
//   installStore(app)
//   // Element Plus
//   installElementPlus(app)
//   // 自定义组件库
//   installComponents(app)

//   app.mount('#app')
// }

// startApp()

let app: any = null
function render (props: any = {}) {
  const { container } = props
  app = createApp(App)

  // 静态资源
  installAssets(app)
  // 路由 VueRouter
  installRouter(app)
  // 路由守卫
  installRouterGuards(router)
  // 全局状态管理 Pinia
  installStore(app)
  // Element Plus
  installElementPlus(app)
  // 自定义组件库
  installComponents(app)
  app?.mount(container ? container.querySelector('#app') : '#app')
  console.log('开始加载相关内容')
}

renderWithQiankun({
  mount (props: any) {
    render(props)
  },
  bootstrap () {
    console.log('%c', 'color:green;', ' ChildOne bootstrap')
  },
  update () {
    console.log('%c', 'color:green;', ' ChildOne update')
  },
  unmount (props: any) {
    console.log('unmount', props)
    app.unmount()
    app._container.innerHTML = ''
    app = null
  }
})
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  console.log('并不是qiankun渲染')
  render()
}
