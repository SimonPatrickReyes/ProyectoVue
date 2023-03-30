export default{
    namespaced:true,
    state:{
        items:[]
    },

    getters:{
        videogames(state){
            return state.items
        },
    },
    mutations:{
        setVideogames(state,videogames){
            state.items=videogames
        },
    },
    actions:{
        async fecthVideogames({commit}){ 
            const res = await fetch('http://localhost:3001/api/v1/videogames')
            const data = Object.values(await res.json())
            commit('setVideogames',data)
        }
    }
}