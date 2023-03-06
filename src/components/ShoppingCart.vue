<template>
    <aside class="aside_carrito">
        <h1>Carrito</h1>
        <p>Productos:{{ videogames.length }}</p>
        <p>Total:{{total | currency}}€</p>
        <button @click="checkout" class="checkout">Checkout</button>
        <p v-if="$checkoutStatus">{{checkoutStatus}}</p>
    </aside>
</template>
<script>
import {currency} from '../currency';
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