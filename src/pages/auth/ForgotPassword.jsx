import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Link
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }


    try {

      // API call will be added here
      // await forgotPassword(email)

      setMessage(
        "Password reset link has been sent to your email"
      );

    } catch (err) {

      setError(
        "Unable to send reset link"
      );

    }
  };


  return (
    <Box>

      <Typography
        variant="h5"
        textAlign="center"
        mb={2}
        fontWeight="bold"
      >
        Forgot Password
      </Typography>


      <Typography
        variant="body2"
        textAlign="center"
        color="text.secondary"
        mb={3}
      >
        Enter your registered email to reset your password
      </Typography>


      {
        error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )
      }


      {
        message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )
      }


      <form onSubmit={handleSubmit}>

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          margin="normal"
        />


        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Send Reset Link
        </Button>

      </form>


      <Box
        textAlign="center"
        mt={3}
      >

        <Link
          component={RouterLink}
          to="/login"
          underline="hover"
        >
          Back to Login
        </Link>

      </Box>

    </Box>
  );
};

export default ForgotPassword;