<template>
   <section v-if="videogame">
    <body class="videogame__body">
    <div class="videogame__carousel">
        <video src="../images/redDeadRedemption.webm" controls autoplay muted></video>
        <div class="videogame__images">
            <img src="../images/redDeadRedemption/paisaje1.jpg" alt="">
            <img src="../images/redDeadRedemption/paisaje2.jpg" alt="">
            <img src="../images/redDeadRedemption/paisaje3.jpg" alt="">
            <img src="../images/redDeadRedemption/paisaje4.jpg" alt="">
        </div>

    </div>
    <div class="videogame__cover">
    <h1>{{ videogame.name}}</h1>
    <img :src=imgPath+videogame.img alt="">
    <p>{{ videogame.description }}</p>
    </div>
    </body>
   </section>
</template>

<script>
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
        }
    },
    computed:{
        videogameId(){
            return parseInt(this.$route.params.id)
        },
        videogame(){
            return this.games.find(videogame=>videogame.id === this.videogameId)
        }
    }
}

</script>