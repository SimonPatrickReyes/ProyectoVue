<template>
  <div class="form">
    <h2>Sign in to Steam</h2>
    <form @submit.prevent="doLoginPopUp()">
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
    <span v-if="showMessage" class="message"> {{ message }}</span>
  </div>
  <Modal v-if="user" :notClose="true" @close="toggleModal" :modalActive="modalActive" class="modal">
    <div class="modal__login">
      <h1>¡Bienvenido de nuevo {{user.name}}!</h1>
      <a href="/">Volver a Inicio</a>
    </div>
  </Modal>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
import Modal from "../components/Modal.vue"

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      email: null,
      password: null,
      modalActive: false,
      showMessage: false
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
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
    resetData() {
      this.email = this.password = '';
    },
    async doLoginPopUp() {
      this.loading = true
      await this.doLogin({ inputEmail: this.email, inputPassword: this.password })
      this.loading = false
      if (this.user) {
        this.modalActive = true
      }
      else {
        this.showMessage = true
        setTimeout(() => this.showMessage = false, 5000);
      }
    },
  },
  components: {
    Modal
  },

};
</script>
