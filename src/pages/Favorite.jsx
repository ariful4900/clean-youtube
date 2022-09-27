import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ListCard from "../components/Playlists/PlaylistCard";
import usePlaylist from "../hooks/usePlaylist";

const FavoritePlaylist = () => {
  const { favoritePlay } = usePlaylist();

  if (favoritePlay.length === 0) {
    return (
      <Container maxWidth="md">
        <Typography variant="h2">
          Sorry! You have Not any favorite playlist
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
            <Grid
              item
              md={4}
              lg={4}
              xl={4}
              sm={6}
              xs={12}
              key={item.playlistId}
            >
              <ListCard item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default FavoritePlaylist;
