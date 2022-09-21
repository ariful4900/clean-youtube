import { Container, Grid } from "@mui/material";
import React from "react";
import ListCard from "../components/Playlists/PlaylistCard";

const Playlists = ({ playlists }) => {
  const playlistArray = Object.values(playlists.data);
  console.log(playlistArray);
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
