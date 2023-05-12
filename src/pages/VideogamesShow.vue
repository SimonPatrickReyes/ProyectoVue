<template>
    <section v-if="videogame" class="videogame__section">
        <article class="videogame__article">
            <h1>{{ videogame.name }}</h1>
            <div class="videogame__content">
                <div class="videogame__carousel">
                    <video src="../images/redDeadRedemption.webm" controls autoplay muted></video>
                    <div class="videogame__images">
                        <img :src=fetchImg(moreImg(videogame.img,1)) alt="">
                        <img :src=fetchImg(moreImg(videogame.img,2)) alt="">
                        <img :src=fetchImg(moreImg(videogame.img,3)) alt="">
                        <img :src=fetchImg(moreImg(videogame.img,4)) alt="">
                    </div>
                </div>
                <div class="videogame__cover">
                    <img :src=fetchImg(videogame.img) alt="videogame.name">
                    <p>{{ videogame.description }}</p>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
import { mapState} from 'vuex'

export default {
    data() {
        return {
            imgPath: "/src/images/",
            games: [],
        }
    },

    async created() {
        this.games = await this.fecthAPI()
    },
    methods: {
        async fecthAPI() {
            const res = await fetch('http://localhost:3001/api/v1/videogames')
            const data = Object.values(await res.json())
            return data
        },
        fetchImg(image) {
            return this.imageURL + image
        },
        imgSrc(videogame) {
            return `/src/images/${videogame.img}`
        },
        moreImg(img,n){
            return img.replace('.',`_${n}.`)
        }
    },
    computed: {
        videogameId() {
            return parseInt(this.$route.params.id)
        },
        videogame() {
            return this.games.find(videogame => videogame.id === this.videogameId)
        },
        ...mapState('videogames', {
            games: state => state.items,
            imageURL: state => state.imageURL
        }),
    }
}

</script>