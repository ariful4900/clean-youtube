import { action, persist } from "easy-peasy";


const favoriteModel = persist({
    items:[],
    addToFavorite: action((state, playlistId)=>{
        if(!state.items.includes(playlistId)){
            state.items.unshift(playlistId)
        }
       
    }),
    removeFromFavorite: action((state, playlistId)=>{  
        state.items= state.items.filter(pid=>playlistId !== pid)
       
    }),
})


export default favoriteModel;