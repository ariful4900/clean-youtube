import { Container, Grid, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import React from "react";
import ListCard from "../components/Playlists/PlaylistCard";

const RecentPlaylist = () => {
  const { playlists, recent } = useStoreState((state) => state);
  const playlistArray = Object.values(playlists.data);
  const recentPlay = playlistArray.filter((item) => {
    return recent.items.includes(item.playlistId);
  });

  if (recentPlay.length === 0) {
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
        Recently You play those playlists
      </Typography>
      <Grid container spacing={2}>
        {recentPlay.length > 0 &&
          recentPlay.map((item) => (
            <Grid item md={4} key={item.playlistId}>
              <ListCard item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default RecentPlaylist;
