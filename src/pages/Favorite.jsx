import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import React from "react";
import ListCard from "../components/Playlists/PlaylistCard";

const FavoritePlaylist = () => {
  const { playlists, favorite } = useStoreState((state) => state);
  const playlistArray = Object.values(playlists.data);
  const favoritePlay = playlistArray.filter((item) => {
    return favorite.items.includes(item.playlistId);
  });

  if (favoritePlay.length === 0) {
    return (
      <Container maxWidth="md">
        <Typography variant="h2">
          Sorry! You have Not in use any playlist
        </Typography>
      </Container>
    );
  }
  return (
    <Container maxWidth={"lg"} sx={{ my: 2 }}>
      <Typography variant="h3" sx={{ my: 2 }}>
        Here is your all favorite playlists
      </Typography>
      <Grid container spacing={2}>
        {favoritePlay.length > 0 &&
          favoritePlay.map((item) => (
            <Grid item md={4} key={item.playlistId}>
              <ListCard item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default FavoritePlaylist;
