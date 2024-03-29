export default {
    namespaced: true,
    state: {
        items: [],
        checkoutStatus: null
    },
    getters: {
        countVideogames(state) {
            return state.items.length

        },
        cartVideogames(state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                console.log(cartItem)
                console.log(rootState.videogames.items)
                const videogame = rootState.videogames.items.find(videogame => videogame.id === cartItem)
                console.log(videogame)
                return {
                    id: videogame.id,
                    img: videogame.img,
                    name: videogame.name,
                    price: videogame.price,
                }
            })
        },

        cartTotal(state, getters, rootState, rootGetters) {
            return rootGetters["cart/cartVideogames"].reduce((total, videogame) => total + videogame.price, 0).toFixed(2)
        },

    },
    mutations: {
        pushVideogameToCart(state, videogameId) {
            state.items.push(videogameId)
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        },
        emptyCart(state) {
            state.items = []
        },
        eliminateVideogameInCart(state, videogameId) {
            state.items = state.items.filter(videogame => videogame != videogameId);
        },
        eliminateAllVideogamesInCart(state) {
            state.items=[];
        }
    },

    actions: {
        addVideogameToCart({ state, getters, commit, rootState, rootGetters }, videogame) {
            const cartItem = state.items.find(itemId => itemId === videogame.id)

            if (!cartItem) {
                commit('pushVideogameToCart', videogame.id)
            } else {
                console.log("repetido")
            }

        },
        eliminateVideogameInCart({ commit }, videogameId) {
            commit("eliminateVideogameInCart", videogameId)
        },

        eliminateAllVideogamesInCart({commit}){
            commit("eliminateAllVideogamesInCart")
        },

        checkout({ state, commit }) {
            commit('emptyCart')
            commit('setCheckoutStatus', 'success')
        },
      
        moveToPurchased({ state, commit }, cartVideogames) {
            // loop through the cartVideogames array and remove each item from the cart
            cartVideogames.forEach(cartItem => {
                const index = state.items.indexOf(cartItem)
                if (index !== -1) {
                    state.items.splice(index, 1)
                }
            })

            // push the cartVideogames array into the PurchasedVideogames array
            commit('addPurchasedVideogames', cartVideogames)
        },
        

    }
}
