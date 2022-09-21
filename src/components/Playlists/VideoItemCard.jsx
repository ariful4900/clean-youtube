import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import useDialog from "../../hooks/useDialog";
import PlayVideo from "./PlayVideo";

const VideoItemCard = ({ item }) => {
  const { open, handleClose, handleOpen } = useDialog();

  const [show, setShow] = useState(false);

  return item.title === "Deleted video" ? null : (
    <Card
      sx={{ display: "flex", boxShadow: "1px 1px 5px #216025" }}
      component={Grid}
      container
      spacing={2}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        component={Grid}
        item
        md={8}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {item.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {!show ? item.description.slice(0, 100) : item.description}
            {!show ? (
              <Button onClick={() => setShow(!show)} sx={{ cursor: "pointer" }}>
                <ExpandMoreIcon />
              </Button>
            ) : (
              <Button onClick={() => setShow(!show)} sx={{ cursor: "pointer" }}>
                <ExpandLessIcon />
              </Button>
            )}
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            Play Video
          </Button>
          <PlayVideo
            handleClose={handleClose}
            open={open}
            title={item.title}
            videoId={item.contentDetails?.videoId}
          />
        </CardContent>
      </Box>
      <Box component={Grid} item md={4}>
        <Stack>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image={item.thumbnails?.url}
            alt="Live from space album cover"
          />
        </Stack>
      </Box>
    </Card>
  );
};

export default VideoItemCard;
``;
