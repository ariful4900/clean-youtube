import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ListCard from "../components/Playlists/PlaylistCard";
import usePlaylist from "../hooks/usePlaylist";

const RecentPlaylist = () => {
  const { recentPlay } = usePlaylist();

  if (recentPlay.length === 0) {
    return (
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ flexGrow: 1 }}>
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

export default RecentPlaylist;
