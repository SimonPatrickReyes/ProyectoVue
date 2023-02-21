<template>
    <div>
        <h1>Carrito</h1>
        <ul>
            <li v-for="videogame in videogames">
            {{videogame.title}}-{{videogame.price | currency}}-{{videogame.quantity}}
            </li>
        </ul>
        <p>Total:{{total | currency}}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="$checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
import { currency } from '../currency';
import {mapState, mapGetters,mapActions} from 'vuex'

export default{
    computed:{
        ...mapGetters({
            videogames:'cartVideogames',
            total:'cartTotal'
        }),
        ...mapState({
            checkoutStatus:'checkoutStatus'
        }),

        videogames(){
            return this.$store.getters.cartVideogames
        },
        total(){
            return this.$store.getters.cartTotal
        }
    },
    methods:{
        ...mapActions(['checkout']),
    }
}
</script>