<template>
    <div>
        <h1>Videogames List</h1>
        <ul>
            <li v-for="videogame in videogames">
                {{videogame.title}}-{{videogame.price | currency}}-{{videogame.inventory}}
                <button 
                :disabled="!videogameIsInStock(videogame)"
                @click="addVideogameToCart(videogame)"
                >Añadir al carrito</button>
            
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import videogames from ''
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
            videogames:state=>state.videogames
        }),
        
        ...mapGetters({
            videogameIsInStock: 'videogameIsInStock'
        }),
    },
       methods:{
        ...mapActions({
            fetchVideogames:'fetchVideogames',
            addVideogameToCart:'addVideogameToCart'
        }),
       },

    created(){
        this.loading= true
        this.fetchVideogames()
            .then(()=>this.loading=false)
    }

    }




</script>