import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ListCard from "../components/Playlists/PlaylistCard";
import usePlaylist from "../hooks/usePlaylist";

const Playlists = () => {
  const { playlistArray } = usePlaylist();
  if (playlistArray.length === 0) {
    return (
      <Container maxWidth="md">
        <Typography sx={{ flexGrow: 1 }} variant="h2">
          Sorry! You have No Any Playlists
        </Typography>
      </Container>
    );
  }
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Grid container spacing={2}>
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <Grid
              item
              md={4}
              lg={4}
              xl={3}
              xs={12}
              sm={6}
              key={item.playlistId}
            >
              <ListCard item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Playlists;
