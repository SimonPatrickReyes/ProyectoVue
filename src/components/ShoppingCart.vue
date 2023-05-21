<template>
        <router-link to="/checkout" class="shoppingCart"><img src="../images/shopping-cart.png" alt="shoppingCart">

        <span class="shoppingCart__span">{{ countVideogames }}</span></router-link>

</template>
<script>

import {mapState, mapGetters,mapActions} from 'vuex'

export default{
    name: "ShoppingCart",
    
    computed: {
        ...mapGetters("cart", {
            total: "cartTotal",
            countVideogames: "countVideogames"
        }),
        ...mapState("cart", {
            checkoutStatus: state => state.checkoutStatus
        }),
        ...mapState("user", {
            userData: state => state.userData
        }),
    },

    created() {
        this.localStorageUser();
    },

    methods: {
        ...mapActions("cart", {
            checkout: "checkout"
        }),
        ...mapActions("user", {
            localStorageUser: "localStorageUser"
        }),
    },
}
</script>