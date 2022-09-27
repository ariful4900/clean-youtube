import {
  DeleteForever,
  PlayCircleOutline,
  StarPurple500,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const ListCard = ({ item }) => {
  const { favorite, recent, playlists } = useStoreActions((state) => state);
  const { items } = useStoreState((state) => state.favorite);
  const navigate = useNavigate();
  const {
    playlistThumbnail,
    playlistTitle,
    playlistId,
    channelTitle,
    playlistItems,
  } = item;

  const handleFavorite = (id) => {
    favorite.addToFavorite(id);
    navigate("/favorite");
  };
  const handleRemoveFavorite = (id) => {
    favorite.removeFromFavorite(id);
    navigate("/favorite");
  };

  const handleDelete = (id) => {
    favorite.removeFromFavorite(id);
    recent.removeFromRecent(id);
    playlists.removePlaylist(id);
  };

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
        <Typography variant="h6" component="h6">
          {playlistTitle.length > 50
            ? playlistTitle.substr(0, 50) + "..."
            : playlistTitle}
        </Typography>
        <Typography variant="body2">{channelTitle}</Typography>
        <Typography variant="body2">
          {" "}
          Total Video: {playlistItems.length}
        </Typography>
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
          sx={{ fontSize: "12px" }}
        >
          <PlayCircleOutline />
          Start Tutorial
        </Button>
        <Box>
          <DeleteForever
            onClick={() => handleDelete(playlistId)}
            titleAccess="Delete this"
            sx={{ cursor: "pointer", color: "red" }}
          />

          {items.includes(playlistId) ? (
            <StarIcon
              onClick={() => handleRemoveFavorite(playlistId)}
              titleAccess="Remove From Favorite"
              sx={{ cursor: "pointer", color: "red" }}
            />
          ) : (
            <StarPurple500
              onClick={() => handleFavorite(playlistId)}
              titleAccess="Add To Favorite"
              sx={{ cursor: "pointer", color: "green" }}
            />
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ListCard;
