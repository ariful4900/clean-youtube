import { useStoreState } from "easy-peasy";

const usePlaylist = () => {
  const { playlists, favorite, recent } = useStoreState((state) => state);

  const playlistArray = Object.values(playlists.data);
  const favoritePlay = playlistArray.filter((item) => {
    return favorite.items.includes(item.playlistId);
  });
  const recentPlay = playlistArray.filter((item) => {
    return recent.items.includes(item.playlistId);
  });

  return {
    recentPlay,
    favoritePlay,
    playlistArray,
  };
};

export default usePlaylist;
