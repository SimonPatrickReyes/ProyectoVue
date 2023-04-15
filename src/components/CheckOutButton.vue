<template>
    <button @click="this.$router.push({ name: 'checkout' })" class="checkout" v-if="user">Checkout</button>
    <button @click="this.$router.push({ name: 'login' })" class="checkout" v-if="!user">Checkout</button>
</template>

<script>
export default {name:"CheckOutButton", props:[
    "user"
]
}
</script>