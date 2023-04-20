<template>
  <div>
    <h2>Mis juegos</h2>
    <div v-for="videogame in userVideogames" :key="videogame.id">
      <img :src="videogame.img" :alt="videogame.name" />
      <h3>{{ videogame.name }}</h3>
      <p>{{ videogame.price }}</p>
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
}
</script>

 