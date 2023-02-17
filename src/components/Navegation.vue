<template>
  
<div class="nav"> 
    <div class="nav_links">
    <router-link to="/">Tienda</router-link>    
    <router-link to="/novedades">Novedades</router-link>    
    <router-link to="/soporte">Soporte</router-link>    
    <router-link to="/comunidad">Comunidad</router-link>
</div>

<div class="singIn">
<router-link to="/login" class="login_register">Log in</router-link>
<router-link to="/register" class="login_register">Register</router-link>
</div></div>

</template>

<script>
    export default{
        name: "Navegation",
        methods:{
            async fetchVideogame(){
                const res=await fetch("http://localhost:3001/api/v1/videogames")
                const gamesData= Object.values(await res.json())
                return gamesData
            }
        }
    }
</script>

<style>
.nav_links .vue-active-link{
    text-shadow: 1px 1px 20px black, 0 0 1em rgb(13, 20, 44), 0 0 0.2em #eee;
    font-weight: 600;
    font-size: 1rem;
    border-width: 1rem;
}

.singIn{
    display: flex;
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
</style>