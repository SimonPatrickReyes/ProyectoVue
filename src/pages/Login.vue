<template>
<div class="form">
  <h2>Sign in to Steam</h2>
  <form @submit.prevent="doLogin({ inputEmail: this.email, inputPassword: this.password }),this.$router.push({name:'Tienda'})">
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" v-model="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" name="password" required>
    </div>
    <div class="form-group">
      <div class="checkbox">
        <input type="checkbox" id="remember" name="remember">
    <label for="remember">Remember me</label>
      </div>
    </div>
    <button type="submit">Sign in</button>
  </form>
  <span v-if="message"> {{ message }}</span>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"

export default {
    name: "Login",
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
