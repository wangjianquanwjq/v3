import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// vxe-table
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
// elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
function useTable(app: any) {
    app.use(VXETable)
}
app.use(createPinia())
app.use(router)
app.use(useTable)
app.use(ElementPlus)

app.mount('#app')
