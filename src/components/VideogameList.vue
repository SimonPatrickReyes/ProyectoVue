<template>
    <div>
        <h1>Videogames List</h1>
        <ul>
            <li v-if="videogames" v-for="videogame in videogames">
                {{videogame.title}}-{{videogame.price | currency}}-{{videogame.inventory}}
                <button @click="addVideogameToCart(videogame)"
                >Añadir al carrito</button>
            
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import { currency } from '../currency'

    export default{
        data(){
            return{
                loading:false,
                videogameIndex:1
            }
        },
        
        computed:{
        ...mapState({
            videogames:state=>state.videogames.items
        }),
        
        ...mapGetters('videogames',{
            videogameIsInStock: 'videogameIsInStock'
        }),
    },
       methods:{
        // ...mapActions({
        //     fetchVideogames:'videogames/fetchVideogames',
        //     addVideogameToCart:'cart/addVideogameToCart'
        // }),
        ...mapActions('videogames',{
            fetchVideogames:'fetchVideogames'
        }),
        ...mapActions('cart',{
            fetchVideogames:'addVideogameToCart'
        }),
       },

    async created(){
        this.loading= true
        await this.fetchVideogames()
        .then(()=>this.loading=false)
    }

    }




</script>