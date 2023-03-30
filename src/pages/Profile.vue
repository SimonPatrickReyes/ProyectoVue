<template>
   <div class="profile">
      <h1>Profile</h1>
      <div v-for="game in tagVideogames" :key="game.id">
         <div>
            <router-link :to="{ name: 'videogames.show', params: { id: user.videogamesPurchased } }">
               <img :src=imgSrc(game) alt="videogame.name">
            </router-link>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   name: "profile",
    data() {
        return {
            isLogin: true,
            loading: false,
            email: null,
            password: null,
        };
    },
    computed: {
        ...mapState('user', {
            user: state => state.userData,
            message: state => state.message,
        }),
    },
    methods: {
        ...mapActions('user', {
            fetchUser: "fetchUser",
            doLogin: "doLogin",
            logout: "logout"
        }),
        resetData() {
            this.email = this.password = '';
        },
    },
};
</script>

