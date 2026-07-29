import React from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

const Loader = ({
  open = true,
  message = "Loading...",
}) => {
  return (
    <Backdrop
      open={open}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1000,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <CircularProgress color="inherit" />

        <Typography variant="h6">
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default Loader;