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
        ...mapGetters('cart',{
            videogames:'cartVideogames',
            total:'cartTotal'
        }),
        ...mapState('cart',{
            checkoutStatus:state=>state.checkoutStatus
        }),

        ...mapGetters ('cart',{
                videogames: "cartVideogames",
                total: "cartTotal",
            }),
    },
    methods:{
        ...mapActions('cart',{
            checkout:'checkout'
        }),
    }
}
</script>