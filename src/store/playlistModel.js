import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist({
  data: {},
  error: "",
  isLoading: false,

  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  removePlaylist: action((state, playlistId)=>{
    if(state.data[playlistId]){
      delete state.data[playlistId]
    }
    state.data
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  setError: action((state, payload) => {
    state.error = payload;
  }),

  getPlaylist: thunk(
    async ({ addPlaylist, setLoading, setError }, playlistId, { getState }) => {
      if (getState().data[playlistId]) {
        console.log("API Call Canceled");
        return;
      }
      setLoading(true);

      try {
        const playlist = await getPlaylist(playlistId);
        addPlaylist(playlist);
      } catch (e) {
        setError(e.response?.data?.error?.message || "Something went Wrong");
      } finally {
        setLoading(false);
      }
    }
  ),
});

export default playlistModel;
