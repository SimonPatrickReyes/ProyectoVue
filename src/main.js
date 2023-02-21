import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import {currency} from './currency'



createApp(App)
new Vue({
    store: store
})
Vue.filter('currency',currency)
.use(router)
.mount('#app')
