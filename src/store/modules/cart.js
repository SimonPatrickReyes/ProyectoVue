export default {
    namespaced: true,
    state: {
        items: [],
        checkoutStatus: null
    },
    getters: {
        cartVideogames(state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                const videogame = rootState.videogames.items.find(videogame => videogame.id === cartItem)
                return {
                    title: videogame.name,
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
            state.items.push({ videogameId })
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
            }
        }
    },
    checkout({ state, commit }) {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
    }
}

