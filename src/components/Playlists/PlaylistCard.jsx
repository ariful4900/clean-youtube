import {
  DeleteForever,
  PlayCircleOutline,
  StarPurple500,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const ListCard = ({ item }) => {
  const { playlistThumbnail, playlistTitle, playlistId, channelTitle } = item;
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 5px #000",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={playlistThumbnail.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {playlistTitle.length > 50
            ? playlistTitle.substr(0, 50) + "..."
            : playlistTitle}
        </Typography>
        <Typography variant="body2">{channelTitle}</Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          component={RouterLink}
          to={`/playlists/${playlistId}`}
        >
          <PlayCircleOutline />
          <Typography variant="body2">Start Tutorial</Typography>
        </Button>
        <Box>
          <Button>
            <DeleteForever />
          </Button>
          <Button>
            <StarPurple500 />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ListCard;
