<template>
<div class="nav"> 
    <div class="nav__links">
    <img src="../images/logo.png" alt="logo" class="nav__logo">
    <router-link to="/">Tienda</router-link>    
    <router-link to="/novedades">Novedades</router-link>    
    <router-link v-if="user" to="/biblioteca">Biblioteca</router-link>    
</div>



<div class="signOut">
    <ShoppingCart v-if="user"/>
<router-link v-if="user" to="/profile" class="profile_icon"><img src="../images/profile-user.png" alt="user_profile"></router-link>

<div class="singIn">
<router-link v-if="!user" to="/login" class="login_register">Log in</router-link>
<router-link v-if="!user" to="/register" class="login_register">Register</router-link>
</div>

<button class="logout" v-if="user" @click=" logout(), this.$router.push({name:'Tienda'})">Log Out</button>
</div></div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
import ShoppingCart from "./ShoppingCart.vue"
    export default{
    name: "Navegation",
    methods: {
        async fetchVideogame() {
            const res = await fetch("http://localhost:3001/api/v1/videogames");
            const gamesData = Object.values(await res.json());
            return gamesData;
        },
        ...mapActions("user", {
            logout: "logout"
        }),
    },
    computed: {
        ...mapState("user", {
            user: state => state.userData,
        }),
    },
    components: { ShoppingCart }
}
</script>

<style>
.nav_links .vue-active-link{
    text-shadow: 1px 1px 20px black, 0 0 1em rgb(13, 20, 44), 0 0 0.2em #eee;
    font-weight: 600;
    font-size: 1rem;
    border-width: 1rem;
}

.singIn :hover  {
    text-shadow: 1px 1px 20px black, 0 0 1em rgb(13, 20, 44), 0 0 0.2em #eee;
    background-color: rgb(199, 190, 190);
}

.nav{
    display:flex;
    justify-content:space-between;
}

.login_register{
    color: #eee;
    text-decoration: none;
    font-weight: 400;
    font-size: 0.7rem;
    background-color: rgb(123, 138, 138);
    border-radius: 3px;
    padding: 0.2rem 0.6rem 0.2rem 0.6rem;
    margin: 0.4rem;
    justify-content: center;
}
.logout{
    color: #eee;
    text-decoration: none;
    font-weight: 400;
    font-size: 0.7rem;
    background-color: rgb(123, 138, 138);
    border-radius: 3px;
    padding: 0.2rem 0.6rem 0.2rem 0.6rem;
    margin: 0.4rem;
    text-transform:uppercase;
    justify-content: center;
    border: none;
    cursor: pointer;
}

.logout:hover  {
    text-shadow: 1px 1px 20px black, 0 0 1em rgb(13, 20, 44), 0 0 0.2em #eee;
    background-color: rgb(199, 190, 190);
}
</style>