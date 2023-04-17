<template>
   <div class="profile">
      <h1>{{user.name}}</h1>
      
      
      
   </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
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

