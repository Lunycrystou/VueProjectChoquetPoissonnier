import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/routeur"
import store from "./store/index.js"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App).use(router).use(store).mount('#app')
