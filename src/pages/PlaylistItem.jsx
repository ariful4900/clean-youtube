import { Box, List, ListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoItemCard from "../components/Playlists/VideoItemCard";

const PlaylistItem = () => {
  const { playlistId } = useParams();
  const playlists = useStoreState((state) => state.playlists);
  const recent = useStoreActions((state) => state.recent);

  const {
    channelId,
    channelTitle,
    playlistDescription,
    playlistTitle,
    playlistItems,
  } = Object.values(playlists.data).find(
    (item) => item.playlistId === playlistId
  );

  useEffect(() => {
    recent.addToRecent(playlistId);
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2">{playlistTitle}</Typography>
      <Typography variant="body2">{playlistDescription}</Typography>
      <Box>
        <Typography
          variant="h6"
          component={"strong"}
          sx={{
            borderBottom: "5px ridge green",
            mb: 2,
          }}
        >
          Playlist Videos :
        </Typography>
        <List sx={{ width: "100%" }}>
          {playlistItems.length > 0 &&
            playlistItems.map((item) => (
              <ListItem
                key={item.contentDetails.videoId}
                sx={{ width: "100%", my: "10px" }}
              >
                <VideoItemCard item={item} />
              </ListItem>
            ))}
        </List>
      </Box>
    </Container>
  );
};

export default PlaylistItem;
