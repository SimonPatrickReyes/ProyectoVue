

<script>
import {mapState,mapGetters,mapActions} from 'vuex'

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