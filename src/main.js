import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
//import {currency} from './currency'



createApp(App)
.use(store)
.use(router)
.mount('#app')
