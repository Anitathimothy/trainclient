import React, { useState } from "react";

import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Link
} from "@mui/material";

import {
  useNavigate,
  useParams,
  Link as RouterLink
} from "react-router-dom";


const ResetPassword = () => {

  const { token } = useParams();

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });


  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");


    if (
      formData.password !== 
      formData.confirmPassword
    ) {

      setError(
        "Passwords do not match"
      );

      return;
    }


    try {

      /*
        Backend API:

        await axios.post(
          `/api/auth/reset-password/${token}`,
          {
            password: formData.password
          }
        );

      */


      setMessage(
        "Password reset successfully"
      );


      setTimeout(() => {
        navigate("/login");
      }, 2000);


    } catch (err) {

      setError(
        "Password reset failed"
      );

    }

  };


  return (

    <Box>

      <Typography
        variant="h5"
        textAlign="center"
        fontWeight="bold"
        mb={2}
      >
        Reset Password
      </Typography>


      <Typography
        variant="body2"
        textAlign="center"
        color="text.secondary"
        mb={3}
      >
        Create a new password for your account
      </Typography>


      {
        error && (
          <Alert
            severity="error"
            sx={{ mb:2 }}
          >
            {error}
          </Alert>
        )
      }


      {
        message && (
          <Alert
            severity="success"
            sx={{ mb:2 }}
          >
            {message}
          </Alert>
        )
      }


      <form onSubmit={handleSubmit}>


        <TextField
          fullWidth
          label="New Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
        />


        <TextField
          fullWidth
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          margin="normal"
          required
        />


        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt:3 }}
        >
          Reset Password
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


export default ResetPassword;