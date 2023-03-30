import { createApp } from 'vue' /* Se importa el metodo para poder crear la aplicacion de Vue*/
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'



createApp(App) /* Se crea la aplicacion de VUE con el archivo App.vue previamente importado*/
.use(store) /* Se indica a la aplicacion de Vue que haga uso del store importado */
.use(router) /* Se indica a la aplicacion de Vue que haga uso del router importado */

.mount('#app') /* Se montará la aplicacion en el elemento con la id "app" */
