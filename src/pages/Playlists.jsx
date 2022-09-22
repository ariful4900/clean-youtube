import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import React from "react";
import ListCard from "../components/Playlists/PlaylistCard";

const Playlists = () => {
  const playlists = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(playlists.data);
  console.log(playlistArray);
  if (playlistArray.length === 0) {
    return (
      <Container maxWidth="md">
        <Typography variant="h2">Sorry! You have No Any Playlists</Typography>
      </Container>
    );
  }
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Grid container spacing={2}>
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <Grid item md={4} key={item.playlistId}>
              <ListCard item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Playlists;
