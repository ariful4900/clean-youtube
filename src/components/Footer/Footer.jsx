import { Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        margin: "20px 0px",
        position: "static",
        textAlign: "center",
        left: "50%",
        bottom: "0",

        top: "100%",
      }}
    >
      <Container>
        <Typography sx={{ textAlign: "center" }} variant="body2">
          All Right Reserved &copy; Md. Ariful Islam
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
