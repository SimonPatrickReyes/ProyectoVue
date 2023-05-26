<template>
    <section v-if="videogame" class="videogame__section">
        <article class="videogame__article">
            <h1>{{ videogame.name }}</h1>

            <div class="videogame__content">
                <carousel @next="next" @prev="prev">
                    <carousel-slide v-for="n in 4" :key="n" :index="n" :visibleSlide="visibleSlide">
                        <img :src="fetchImg(moreImg(videogame.img, n))" />
                    </carousel-slide>
                </carousel>
                <div class="videogame__cover">
                    <img :src=fetchImg(videogame.img) alt="videogame.name">
                    <div class="videogame__description">
                        <p class="videogame__p">{{ videogame.description }}</p>

                        <span v-if="user && videogamePurchased(videogame.id)">Adquirido</span>
                        <button v-else-if="!checkVideogameState(videogame.id)" @click="addVideogameMessage(videogame)"
                            class="videogame__button">Añadir al
                            carrito</button>
                        <span v-else>En el carrito</span>
                    </div>

                </div>

            </div>


        </article>
    </section>

    <div v-if="showMessage" class="videogame__message">
        <button @click="this.showMessage = false">X</button>
        <span>{{ message }}</span>
        <router-link to="/checkout">Ir al carrito</router-link>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Carousel from '../components/Carousel.vue'
import CarouselSlide from '../components/CarouselSlide.vue'


export default {
    data() {
        return {
            imgPath: "/src/images/",
            games: [],
            showMessage: false,
            visibleSlide: 1,
        }
    },

    async created() {
        this.games = await this.fecthAPI()
    },
    methods: {
        async fecthAPI() {
            const res = await fetch('https://apiexpress-production-51d9.up.railway.app/api/v1/videogames')
            const data = Object.values(await res.json())
            return data
        },
        fetchImg(image) {
            return this.imageURL + image
        },
        imgSrc(videogame) {
            return `/src/images/${videogame.img}`
        },
        moreImg(img, n) {
            return img.replace('.', `_${n}.`)
        },
        checkVideogameState(videogameId) {
            return this.cart.includes(videogameId)
        },
        videogamePurchased(videogameId) {
            return this.userVideogameId.includes(videogameId)
        },
        addVideogameMessage(videogame) {
            this.addVideogameToCart(videogame),
                this.message = videogame.name + " añadido al carrito"
            this.showMessage = true,
                setTimeout(() => this.showMessage = false, 3000)
        },
        ...mapActions('videogames', {
            fecthVideogames: "fecthVideogames",
        }),
        ...mapActions('cart', {
            addVideogameToCart: 'addVideogameToCart'
        }),

        /*Carousel methods*/
        next() {
            if (this.visibleSlide == 4) {
                this.visibleSlide = 1;

            } else {
                this.visibleSlide++;
            }
        },
        prev() {
            if (this.visibleSlide == 1) {
                this.visibleSlide = 4;

            } else {
                this.visibleSlide--;
            }
        },




    },
    computed: {
        videogameId() {
            return parseInt(this.$route.params.id)
        },
        videogame() {
            return this.games.find(videogame => videogame.id === this.videogameId)
        },
        ...mapState('videogames', {
            videogames: state => state.items,
            imageURL: state => state.imageURL
        }),
        ...mapState('cart', {
            cart: state => state.items,
        }),
        ...mapState('user', {
            user: state => state.userData
        }),
        ...mapGetters('user', {
            userVideogameId: "userVideogameId"
        }),

        slidesLen() {
            return this.slides.length;
        }

    },
    components: {
        Carousel,
        CarouselSlide,
    }
}

</script>