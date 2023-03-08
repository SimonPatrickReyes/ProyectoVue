<template>
  <div>
    <h2>Purchased Videogames</h2>
    <div v-for="videogame in purchasedVideogames" :key="videogame.id">
      <img :src="videogame.img" :alt="videogame.name" />
      <h3>{{ videogame.name }}</h3>
      <p>{{ videogame.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    purchasedVideogames() {
      return this.$store.state.PurchasedVideogames.map(videogameId => {
        const videogame = this.$store.getters['videogames/getVideogameById'](videogameId)
        return {
          id: videogame.id,
          img: videogame.img,
          name: videogame.name,
          price: videogame.price,
        }
      })
    },
  },
}
</script>

 