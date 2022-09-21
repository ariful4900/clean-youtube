const { persist, action } = require("easy-peasy");


const favoriteModel = persist({
    items:[],
    addToFavorite: action((state, playlistId)=>{
        state.items.unshift(playlistId)
       
    }),
    removeFromFavorite: action((state, playlistId)=>{
        state.items= state.items.filter(pid=>playlistId !== pid)
       
    }),
})


export default favoriteModel;