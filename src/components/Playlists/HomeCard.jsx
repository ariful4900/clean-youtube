import { Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ item }) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(`/playlists/${item.playlistId}`);
  };
  return (
    <Card className="overlay">
      <CardMedia
        component="img"
        height={"100%"}
        image={item.playlistThumbnail.url}
        alt="green iguana"
      />
      <CardContent className="overlayContent">
        <Stack>
          <Typography variant="h5">{item.playlistTitle}</Typography>
          <Button onClick={handleHome}>View Details</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
