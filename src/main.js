import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//css初始化
import "./assets/css/reset.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./api/mock"
import * as echarts from 'echarts'
import store from "../src/store/index"
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.use(router).use(store).mount('#app')
