<template>
 <div class="form">
  <h2>Create a new account</h2>
  <form @submit.prevent="doRegisterAndPopUp()">
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" id="email" v-model="user.email" name="email" required>
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="user.username" name="username" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="user.password" name="password" required>
    </div>
    <div class="form-group">
      <label for="confirm-password">Confirm password</label>
      <input type="password" id="confirm_password" v-model="user.confirm_password" name="confirm_password" required>
    </div>
    <div class="form-group">
      <label for="birthdate">Birthdate</label>
      <input type="date" id="birthdate" v-model="user.birthdate" name="birthdate" required>
    </div>
    <div class="form-group">
      <div class="checkbox">
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">I agree to the Terms of Service and Privacy Policy</label>
      </div>
    </div>
    <button type="submit">Create account</button>
  </form>
</div>
<Modal :notClose="true" @close="toggleModal" :modalActive="modalActive">
            <div class="modal--login">
                <h1>Registrao loquete 😎</h1>
                <a href="/login">Inicia sesion</a>
            </div>
        </Modal>
</template>

<script>
import { mapActions,mapState } from 'vuex'
import Modal from '../components/Modal.vue'

export default{
  data(){
    return{
      user:{
        email:'',
        username:'',
        password:'',
        confirm_password:'',
        birthdate:''
      },
      modalActive:false
    }
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
            doRegister: "doRegister",
            logout: "logout"
        }),
        resetData() {
            this.email = this.password = '';
        },
        toggleModal(){
            this.modalActive = !this.modalActive;
        },
        async doRegisterAndPopUp(){
            this.loading = true
            await this.doRegister({ inputUsername: this.user.username, inputEmail: this.user.email, inputPassword: this.user.password })
            this.loading = false
            if(this.message=="Usuario creado"){
                this.modalActive = true
            }
            else{
                this.showMessage = true
                setTimeout(() => this.showMessage = false, 5000);
            }
        },
    },
    components:{
      Modal
    }

}


</script>
