
<template>
  <main class="tienda_main">
    <aside class="tienda_aside">
      <Filter @check-filter="updateDataByFilter" />
    </aside>
    <div class="tienda_div">
      <section class="tienda_videogames">
        <div v-for="game in tagVideogames" :key="game.id" class="tienda">
          <div class="tienda_content">
            <router-link class="tienda_router" :to="{ name: 'videogames.show', params: { id: game.id } }">
            <img :src=imgSrc(game) alt="videogame.name">
          </router-link>
          <div>
            <h3>{{ game.name }}</h3>
            <ul>
              <li v-for="tag in game.tags"><a href="">{{ replaceCharacters(tag) }}</a></li>
            </ul>
          </div>
          </div>
          
          <div class="videogame_price">
            <h4>{{ game.price + "€" }}</h4>
            <button @click="addVideogameToCart(game)">Añadir al carrito</button>
          </div>
        </div>
      </section>
    </div>
    <ShoppingCart />
  </main>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Filter from '../components/Filter.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
export default {
  name: "Tienda",
  data() {
    return {
      ruta: "../images/",
      tags: ["Open_World", "Story_Rich", "Adventure", "Western", "Survival",
        "Crafting", "Multiplayer", "PvP", "Sandbox", "Funny", "Moddeable",
        "Mod", "Zombies", "2D", "Pirates", "RPG", "Post-apocalyptic",
        "Singleplayer", "FPS","Sci-fi_Space", "Hero_Shooter", "Tactical"],
      activeTags: [],
    }
  },
  computed: {
    tagVideogames() {
      const videogames = this.$store.getters["videogames/videogames"]
      if (videogames) {
        if (this.activeTags.length === 0) {
          console.log("No filters")
          return videogames
        }
        else {
          const filteredVideogames = [];
          videogames.forEach(videogame =>
            this.tags.forEach(tag => {
              if (this.activeTags.includes(tag) && videogame.tags.includes(tag)) {
                console.log(videogame.name + ' ' + tag)
                if (!filteredVideogames.includes(videogame)) {
                  filteredVideogames.push(videogame)
                }
              }
            }
            )
          )
          return filteredVideogames
        }
      }
      else { return ' ' }
    },
    ...mapState('videogames', {
      games: state => state.items,
    }),
  },
  async created() {
    await this.fecthVideogames()
  },
  methods: {
    replaceCharacters(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).replace('_', ' ');
    },
    updateDataByFilter(udpateOptions) {
      this.activeTags = udpateOptions
      console.log("activeTags" + this.activeTags)

    },
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
  components: { Filter, ShoppingCart },
}
</script>
