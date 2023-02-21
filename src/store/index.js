import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
 state:{
    videogames:[],
    cart:[],
    checkoutStatus:null
 },
 getters:{
    availableVideogames(state,getters){
        return state.videogames.filter(videogame=>videogame.inventory>0)

    },
    cartVideogames(state){
        return state.cart.map(cartItem=>{
            const videogame=state.videogames.find(videogame=>videogame.id===cartItem.id)
            return{
                title:videogame.title,
                price:videogame.price,
                quantity:videogame.quantity
            }
        })
    },

    cartTotal(state,getters){
        return getters.cartVideogames.reduce((total,videogame)=>total+videogame.price*videogame.quantity,0)
    },
    videogameIsInStock(){
        return(videogame)=>{
            return videogame.inventory>0
        }
    }



 },
 actions:{
    fecthVideogames({commit}){
        return new Promise((resolve, reject)=>{
            
        
        shop.getVideogames(videogames=>{
            commit('setVideogames',videogames)
            resolve()
        })
      })
    },
 

 addVideogameToCart({state,getters,commit},videogame){
    if(getters.videogameIsInStock(videogame)){
        const cartItem=context.state.cart.find(item=>item.id===videogame.id)
        if(!cartItem){
            commit('pushVideogameToCart',videogame.id)
        }else{
            commit('incrementItemQuantity',cartItem)
        }
        commit('decrementVideogameInventory',videogame)
    }
 },
 checkout({state,commit}){
    shop.buyVideogame(
        state.cart,
        ()=>{
            commit('emptyCart')
            commit('setCheckoutStatus','success')
        },
        ()=>{
            commit('setCheckoutStatus','fail')
        }
    )
 }
},

 mutations:{
    setVideogames(state,videogames){
        state.videogames=videogames
    },
    pushVideogameToCart(state,videogameId){
        state.cart.push({
            id:videogameId,
            quantity:1
        })
    },
    incrementItemQuantity(state,cartItem){
        cartItem.quantity++
    },
    decrementVideogameInventory(state,videogame){
        videogame.inventory--
    },
    setCheckoutStatus(state,status){
        state.checkoutStatus=status
    },
    emptyCart(state){
        state.cart=[]
    }
  }
})
