import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from "pinia";
import { router } from './router/router'



const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
