// import Vuex from 'vuex'
// import Vue from 'vue'
// import cart from './modules/cart'
// import videogames from './modules/videogames'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     modules: {
//         cart,
//         videogames
//     },

//     state: {

//     },

//     getters: {

//     },
    
//     actions: {

//     },

//     mutations: {

//     }
// })

import { createStore } from 'vuex'
import cart from './modules/cart'
import videogames from './modules/videogames'
import user from './modules/user'

const store = createStore({
    modules:{
        cart,
        videogames,
        user,
    },
    state () { //data
      return{
        fetchImageURL: "https://api-node.up.railway.app/api/v1/images/"
      }
    },
    getters:{ // = computed
        
    },
    actions:{

    },
    mutations:{
        
    }
})
export default store
