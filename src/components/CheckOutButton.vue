<template>
    <button @click="this.$router.push({ name: 'checkout' })" class="checkout__button" v-if="user">Comprar</button>
    <button @click="this.$router.push({ name: 'login' })" class="checkout__button" v-if="!user">Comprar</button>
</template>

<script>
export default {name:"CheckOutButton", props:[
    "user"
]
}
</script>