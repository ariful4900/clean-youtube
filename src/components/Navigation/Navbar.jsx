import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import useDialog from "../../hooks/useDialog";
import PlaylistForm from "../Playlists/PlaylistForm";

import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

const pages = [
  {
    name: "Recent",
    to: "/recent",
  },
  {
    name: "Favorite",
    to: "/favorite",
  },
  {
    name: "Playlists",
    to: "/playlists",
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { open, handleOpen, handleClose } = useDialog();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "white" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <YouTubeIcon
            sx={{
              mr: 1,
              color: "green",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                fontSize: "40px",
              },
            }}
          />
          <Typography
            variant="h4"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",

              textDecoration: "none",
            }}
          >
            Clean Youtube
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="success"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((item, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Typography
                    to={item.to}
                    component={RouterLink}
                    textAlign="center"
                    sx={{ textDecoration: "none" }}
                  >
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,

              textDecoration: "none",
            }}
          >
            Clean Youtube
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((item, idx) => (
              <Button
                key={idx}
                to={item.to}
                component={RouterLink}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleOpen}
              sx={{ fontSize: { xs: "10px", sm: "14px", md: "16px" } }}
            >
              Add Playlists
            </Button>
          </Box>
        </Toolbar>
        <PlaylistForm open={open} handleClose={handleClose} />
      </Container>
    </AppBar>
  );
};

export default Navbar;
