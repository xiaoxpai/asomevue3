import './assets/main.css'

import { createApp } from 'vue'
//从一个单文件导入根组件
import App from './App.vue'

//mount()方法将根组件挂载到index.html中的id为app的div上
createApp(App).mount('#app')
