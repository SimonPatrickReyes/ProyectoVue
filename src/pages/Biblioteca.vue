<template>
  <main class="biblioteca__main">
    <h2>Mis juegos</h2>
    <div class="biblioteca">
      <div v-if="userVideogames" v-for="videogame in userVideogames" :key="videogame.id" class="biblioteca__games">
        <img :src=imgSrc(videogame) alt="videogame.name" />
        <router-link class="biblioteca__router" :to="{ name: 'videogames.show', params: { id: videogame.id } }">Visitar página</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', {
      userVideogames: 'userVideogames',
    }),
  },
  created() {
    this.localStorageUser();
    this.fecthVideogames()
  },
  methods: {
    ...mapActions('videogames', {
      fecthVideogames: "fecthVideogames",
    }),
    imgSrc(videogame) {
      return `/src/images/${videogame.img}`
    },
    ...mapActions("user", {
      localStorageUser: "localStorageUser"
    }),
  },
}

</script>

 