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
    async fecthAPI() {
      const res = await fetch('http://localhost:3001/api/v1/videogames')
      const data = await res.json()
      return data
    }
  },
}
</script>

<template>
  <Header />
  <!--<component :is="currentView" />-->
  <div>
      <VideogameList/>
      
      <RouterView :key="$route.path"/>
  </div>
  <Footer />
</template>

<style>
@import "../public/main.css";
</style>