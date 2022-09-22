import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

const Menus = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    mx: "20px",
    textDecoration: "none",
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Link component={RouterLink} sx={linkStyle} to="/recent">
          Recent
        </Link>
        <Link component={RouterLink} sx={linkStyle} to="/favorite">
          Favorite
        </Link>
        <Link
          component={RouterLink}
          to="/playlists"
          variant="body2"
          sx={linkStyle}
        >
          Playlists
        </Link>
      </Box>
    </React.Fragment>
  );
};

export default Menus;
