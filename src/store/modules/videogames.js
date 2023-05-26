export default{
    namespaced:true,
    state:{
        items:[],
        imageURL: "https://apiexpress-production-51d9.up.railway.app/api/v1/images/"
    },
    getters:{
        videogames(state){
            return state.items
        },
        availableVideogames(state,getters){
            return state.items.filter(videogame=>videogame.inventory>0)
    
        },
        
        videogameIsInStock(){
            return(videogame)=>{
                return videogame.inventory>0
            }
        }
    },
    mutations:{
        setVideogames(state,videogames){
            state.items=videogames
        },
        
        decrementVideogameInventory(state,videogame){
            videogame.inventory--
        },
    },
    actions:{
        async fecthVideogames({commit}){ 
            const res = await fetch('https://apiexpress-production-51d9.up.railway.app/api/v1/videogames')
            const data = Object.values(await res.json())
            commit('setVideogames',data)
        },
    }
}