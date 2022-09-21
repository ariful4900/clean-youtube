import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Container maxWidth={"md"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Stack>
          <Typography variant="h1" component={"header"}>
            404
          </Typography>
          <Typography variant="body2" component={"p"}>
            You Page No Match
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default NotFound;
