
<template>
  <main class="tienda__main">

    <div class="tienda__div">
      <SearchBar @check-search-bar="updateDataBySearchBar"></SearchBar>
      <section class="tienda__videogames">
        <div v-for="game in tagVideogames" :key="game.id" class="tienda">
          <div class="tienda__content">
            <router-link class="tienda__router" :to="{ name: 'videogames.show', params: { id: game.id } }">
              <img :src=fetchImg(game.img) alt="videogame.name">

              <div class="tienda__tittle">
                <h3>{{ game.name }}</h3>
                <ul>
                  <li v-for="tag in game.tags"><a href="">{{ replaceCharacters(tag) }}</a></li>
                </ul>
              </div>
            </router-link>
          </div>

          <div class="videogame__price">
            <h4> {{freeToPlay(game.price)}}</h4>
            <span v-if="user && videogamePurchased(game.id)">Adquirido</span>
            <button v-else-if="!checkVideogameState(game.id)" @click="addVideogameMessage(game)">Añadir al
              carrito</button>
            <span v-else>En el carrito</span>
          </div>

        </div>
      </section>
    </div>

    <div v-if="showMessage" class="tienda__message">
      <button @click="this.showMessage = false">X</button>
      <span>{{ message }}</span>
      <router-link to="/checkout">Ir al carrito</router-link>
    </div>

    <aside class="tienda__aside">
      <Filter @check-filter="updateDataByFilter" />
    </aside>

  </main>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Filter from '../components/Filter.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: "Tienda",
  data() {
    return {
      ruta: "../images/",
      tags: ["Open_World", "Story_Rich", "Adventure", "Western", "Survival",
        "Crafting", "Multiplayer", "PvP", "Sandbox", "Funny", "Moddeable",
        "Mod", "Zombies", "2D", "Pirates", "RPG", "Post-apocalyptic",
        "Singleplayer", "FPS", "Hero_Shooter", "Tactical", "Action",
        "Sci-fi", "Classic", "Shooter", "Competitive", "Crime", "Farming", "Co-op"],
      activeTags: [],
      search:"",
      message: "",
      showMessage: false
    }
  },
  computed: {
    /*Metodo tagVideogames devuelve una lista que contiene los videojuegos que contengan entre sus  etiquetas al menos una de las etiquetas
    almacenadas en el array activeTags, de modo que se filtran los videojuegos por las etiquetas activas.*/
    tagVideogames() {
      const videogames = this.$store.getters["videogames/videogames"]
      var filteredVideogames = [];
      if (videogames) {
        
        if (this.activeTags.length === 0) {
          filteredVideogames=videogames
        }
        else {
          videogames.forEach(videogame =>
            this.tags.forEach(tag => {
              if (this.activeTags.includes(tag) && videogame.tags.includes(tag)) {
                if (!filteredVideogames.includes(videogame)) {
                  filteredVideogames.push(videogame)
                }
              }
            }
            )
          )
        }
        if (this.search!="") {
         
          return filteredVideogames.filter(videogame => videogame.name.toLowerCase().includes(this.search.toLowerCase()));
        }
        else{
          return filteredVideogames
        }


      }
      else { return ' ' }
    },
    ...mapState('videogames', {
      games: state => state.items,
      imageURL: state => state.imageURL
    }),
    ...mapState('cart', {
      cart: state => state.items,
    }),
    ...mapGetters('user', {
      userVideogameId: "userVideogameId"
    }),
    ...mapState('user', {
      user: state => state.userData
    }),
  },
  async created() {
    await this.fecthVideogames()
  },
  methods: {
    checkVideogameState(videogameId) {
      return this.cart.includes(videogameId)
    },
    videogamePurchased(videogameId) {
      return this.userVideogameId.includes(videogameId)
    },
    replaceCharacters(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).replace('_', ' ');
    },

    updateDataByFilter(udpateOptions) {
      this.activeTags = udpateOptions
    },

    updateDataBySearchBar(udpateOptions){
      this.search=udpateOptions
    },
    fetchImg(image){
      return this.imageURL+image
    },
    addVideogameMessage(game) {
      this.addVideogameToCart(game),
        this.message = game.name + " añadido al carrito"
      this.showMessage = true,
        setTimeout(() => this.showMessage = false, 100000)
    },

    freeToPlay(price){
        if (price==0) {
          return "Free to play"
        }
        else return price+" €"
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
  components: { Filter, ShoppingCart, SearchBar },
}
</script>
