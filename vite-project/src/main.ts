import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './utils/qiankun.ts'

// 全局注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { camelCaseToLine } from '@/utils/str-utils'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon${camelCaseToLine(key)}`, component)
}

app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
