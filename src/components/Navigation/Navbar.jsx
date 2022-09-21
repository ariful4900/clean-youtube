import MenuIcon from "@mui/icons-material/Menu";

import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import useDialog from "../../hooks/useDialog";
import PlaylistForm from "../Playlists/PlaylistForm";
import Menus from "./Menus";

const Navbar = () => {
  const { handleOpen, handleClose, open } = useDialog();
  const handleAddPlaylist = () => {
    handleOpen();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ background: "white" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
              color="primary"
            >
              Clean Youtube
            </Typography>
            <Box>
              <Menus />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="success"
                onClick={handleAddPlaylist}
              >
                Add Playlist
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <PlaylistForm handleClose={handleClose} open={open} />
    </Box>
  );
};
export default Navbar;
