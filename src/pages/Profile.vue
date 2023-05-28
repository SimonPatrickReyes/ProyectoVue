<template>
    <div class="profile">
        <!--Profile picture???-->
        <h1>{{ user.name }}</h1>
        <router-link :to="{ name: 'Biblioteca' }" class="profile_button">Ver tus juegos</router-link>
        <!--Purchased Games-->
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    name: "profile",
    data() {
        return {
            isLogin: true,
            loading: false,
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

