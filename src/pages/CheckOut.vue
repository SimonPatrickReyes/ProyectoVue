<template>
    <div class="checkout">
    <h1 class="checkout__h1">Carro de la compra</h1>
    
        <div v-if="count!=0" v-for="game in videogames" :key="game.id">
            <div class="checkout__videogame">
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
                <div class="checkout__buttons">
                    <button @click="eliminateVideogameInCart(game.id)">X</button>
                </div>
            </div>
        </div>
        <div v-else>
        <div class="checkout__alert">
        <p>¡No hay articulos en el carrito!</p>
        <router-link to="/">Volver a la tienda</router-link>
        </div>   
        </div>

        <div class="checkout__buy">
            <p>Total:{{ total }}€</p>
            <CheckOutButton v-bind:user="this.userData" />
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import CheckOutButton from '../components/CheckOutButton.vue'

export default {

    computed: {
        ...mapGetters('cart', {
            videogames: 'cartVideogames',
            total: 'cartTotal',
            count: 'countVideogames'
        }),
        ...mapState('cart', {
            checkoutStatus: state => state.checkoutStatus
        }),

        ...mapGetters('cart', {
            videogames: "cartVideogames",
            total: "cartTotal",
        }),
        ...mapState("user", {
            userData: state => state.userData
        }),
    },

    created() {
        this.localStorageUser();
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
        ...mapActions("user", {
            localStorageUser: "localStorageUser"
        }),
        imgSrc(videogame) {
            return `/src/images/${videogame.img}`
        },

    },
    components: { CheckOutButton }
}
</script>