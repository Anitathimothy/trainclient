import React from "react";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";

const NoData = ({
  title = "No Data Found",
  message = "There is nothing to display.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        px: 3,
        textAlign: "center",
      }}
    >
      <InboxOutlinedIcon
        sx={{
          fontSize: 80,
          color: "text.disabled",
          mb: 2,
        }}
      />

      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        {message}
      </Typography>

      {buttonText && (
        <Button
          variant="contained"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};

export default NoData;