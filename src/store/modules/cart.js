export default {
    namespaced: true,
    state: {
        items: [],
        checkoutStatus: null
    },
    getters: {
        countVideogames(state){
            return state.items.count()

        },
        cartVideogames(state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                console.log(cartItem)  
                console.log(rootState.videogames.items)
                const videogame=rootState.videogames.items.find(videogame => videogame.id === cartItem)
                console.log(videogame)
                return {
                    name: videogame.name,
                    price: videogame.price,
                }
            })
        },

        cartTotal(state, getters, rootState, rootGetters) {
            return rootGetters["cart/cartVideogames"].reduce((total, videogame) => total + videogame.price, 0)
        },

    },
    mutations: {
        pushVideogameToCart(state, videogameId) {
            state.items.push( videogameId )
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        },
        emptyCart(state) {
            state.items = []
        }
    },
    
    actions: {
        addVideogameToCart({ state, getters, commit, rootState, rootGetters }, videogame) {
            const cartItem = state.items.find(itemId => itemId === videogame.id)
            
          
            if (!cartItem) {
                commit('pushVideogameToCart', videogame.id)
            }else{
                console.log("repetido")
            }
            
        }
    },
    checkout({ state, commit }) {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
    }
}

