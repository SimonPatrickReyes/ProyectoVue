<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import VideogameList from './components/VideogameList.vue'

import { mapState, mapGetters, mapActions } from "vuex"


export default {
  name: "App",
  components: {
    Header,
    Footer,
    VideogameList,
    
  },
  data() {
    return {
      games: [],
    }
  },
  
  created() {
    this.games = this.fecthAPI()
    this.localStorageUser()
  },
  
  methods: {
    ...mapActions('user', {
      localStorageUser: "localStorageUser",
    }),
    ...mapActions(['leerToken']),
    async fecthAPI() {
      const res = await fetch('http://localhost:3001/api/v1/videogames')
      const data = await res.json()
      return data
    },
    created(){
      this.leerToken()
    }
  },
}
</script>

<template>
  <Header />
  <!--<component :is="currentView" />-->
  <main>
      <VideogameList/>
      
      <RouterView :key="$route.path"/>
  </main>
  <Footer />
</template>

<style>
@import "../src/assets/sass/main.scss";
</style>