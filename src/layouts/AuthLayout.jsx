import React from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  Paper,
  Typography
} from "@mui/material";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >

      <Paper
        elevation={5}
        sx={{
          width: {
            xs: "95%",
            sm: 450,
          },
          padding: 4,
          borderRadius: 3,
        }}
      >

        {/* Logo / Application Name */}
        <Box
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
          >
            TicketPro
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Online Ticket Management System
          </Typography>
        </Box>


        {/* Child Routes */}
        <Outlet />

      </Paper>

    </Box>
  );
};

export default AuthLayout;