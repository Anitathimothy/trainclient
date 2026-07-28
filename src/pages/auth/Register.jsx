import React, { useState } from "react";

import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  MenuItem,
  Link
} from "@mui/material";

import {
  Link as RouterLink,
  useNavigate
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { registerSuccess } from "../../redux/slice/authSlice";


const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER"
  });


  const [error, setError] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");


    if(formData.password !== formData.confirmPassword){

      setError(
        "Passwords do not match"
      );

      return;
    }


    try {

      /*
        Backend API:

        const response = await axios.post(
          "/api/auth/register",
          formData
        );

        const {user, token} = response.data;

      */


      // Temporary response
      const user = {
        id: 1,
        name: formData.name,
        email: formData.email,
        role: formData.role
      };


      const token = "sample-jwt-token";


      dispatch(
        registerSuccess({
          user,
          token
        })
      );


      navigate("/dashboard");


    } catch(error){

      setError(
        "Registration failed"
      );

    }

  };


  return (

    <Box>

      <Typography
        variant="h5"
        textAlign="center"
        fontWeight="bold"
        mb={3}
      >
        Create Account
      </Typography>


      {
        error && (
          <Alert severity="error" sx={{mb:2}}>
            {error}
          </Alert>
        )
      }


      <form onSubmit={handleSubmit}>


        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />


        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />


        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
        />


        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          margin="normal"
          required
        />


        <TextField
          select
          fullWidth
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          margin="normal"
        >

          <MenuItem value="USER">
            User
          </MenuItem>

          <MenuItem value="EMPLOYEE">
            Employee
          </MenuItem>

        </TextField>


        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            mt:3,
            mb:2
          }}
        >
          Register
        </Button>


      </form>


      <Box textAlign="center">

        <Link
          component={RouterLink}
          to="/login"
          underline="hover"
        >
          Already have an account? Login
        </Link>

      </Box>


    </Box>

  );
};


export default Register;