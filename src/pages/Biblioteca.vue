<template>
  <div class="biblioteca">
    <h2>Mis juegos</h2>
    <div v-for="videogame in userVideogames" :key="videogame.id" class="biblioteca__games">
      <img :src=imgSrc(videogame) alt="videogame.name"/>
      <h3>{{ videogame.name }}</h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', {
      userVideogames: 'userVideogames',
    }),
  },
  methods:{
    imgSrc(videogame) {
      return `/src/images/${videogame.img}`
    }
  },
  }

</script>

 