
<template>
  <div v-if="games" v-for="game in games" :key="game.id" class="tienda">
    <router-link class="tienda_router" :to="{ name: 'videogames.show', params: { id: game.id } }">
      <img :src=imgSrc(game) alt="videogame.name">
      <h3>{{ game.name }}</h3>
    </router-link>
    <ul>
      <li v-for="tag in game.tags"><a href="">{{ tag }}</a></li>
    </ul>
    <h4>{{ game.price + "€" }}</h4>
    <button @click="addVideogameToCart(game)">Añadir al carrito</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Tienda",
  data() {
    return {
      ruta: "../images/"
    }
  },
  computed: {
    ...mapState('videogames', {
      games: state => state.items,
    }),
  },
  async created() {
    await this.fecthVideogames()
  },
  methods: {
    // async fecthAPI(){
    //     console.log("fetch")
    //     const res = await fetch('http://localhost:3001/api/v1/videogames')
    //         const data = await res.json()
    //         console.log(data)
    //         return data
    // },
    ...mapActions('videogames', {
      fecthVideogames: "fecthVideogames",
    }),
    ...mapActions('cart', {
      addVideogameToCart: 'addVideogameToCart'
    }),
    imgSrc(videogame) {
      return `/src/images/${videogame.img}`
    }
  },
}
</script>