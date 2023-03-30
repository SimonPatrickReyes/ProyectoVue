<template>
    <div class="aside_carrito">
        <h1>Carrito</h1>
        <p>Productos: {{ videogames.length }}</p>
        <p style="font-weight: 600;">Total:{{total}}€</p>
        <button @click="this.$router.push({name:'checkout'})" class="checkout">Checkout</button>
        <p v-if="$checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>
<script>

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