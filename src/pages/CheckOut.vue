<template>
<h1>Check Out</h1>
    <div class="checkout">
        <div v-for="game in videogames" :key="game.id">
            <div class="checkout_videogame">
                <router-link :to="{ name: 'videogames.show', params: { id: game.id } }">
                    <img :src=imgSrc(game) alt="videogame.name">
                </router-link>
                <div>
                    <h3>{{ game.name }}</h3>
                    <ul>
                        <li v-for="tag in game.tags"><a href="">{{ replaceCharacters(tag) }}</a></li>
                    </ul>

                </div>


                <div class="videogame_price">
                    <h4>{{ game.price + "€" }}</h4>
                </div>
                <div class="checkout_buttons">
                    <button @click="eliminateVideogameInCart(game.id)">X</button>
                </div>
            </div>
        </div>
        <div class="checkout_buy">
        <p>Total:{{total | currency}}€</p>
        <button>Comprar</button>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters('cart', {
            videogames: 'cartVideogames',
            total: 'cartTotal'
        }),
        ...mapState('cart', {
            checkoutStatus: state => state.checkoutStatus
        }),

        ...mapGetters('cart', {
            videogames: "cartVideogames",
            total: "cartTotal",
        }),
    },

    getters: {
        countVideogames(state) {
            return state.items.count()

        },
        cartVideogames(state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                console.log(cartItem)
                console.log(rootState.videogames.items)
                const videogame = rootState.videogames.items.find(videogame => videogame.id === cartItem)
                console.log(videogame)
                return {
                    img: videogame.img,
                    name: videogame.name,
                    price: videogame.price,
                }
            })
        },

        cartTotal(state, getters, rootState, rootGetters) {
            return rootGetters["cart/cartVideogames"].reduce((total, videogame) => total + videogame.price, 0)
        },

    },
    methods: {
        ...mapActions('cart', {
            checkout: 'checkout',
            eliminateVideogameInCart: 'eliminateVideogameInCart'
        }),
        imgSrc(videogame) {
            return `/src/images/${videogame.img}`
        },
    },
}
</script>