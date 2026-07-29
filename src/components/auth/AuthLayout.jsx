import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 3,
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
            >
              Ticket Management System
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mt={1}
            >
              Sign in to continue
            </Typography>
          </Box>

          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthLayout;