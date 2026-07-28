import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Link,
  InputAdornment,
  IconButton
} from "@mui/material";

import {
  Visibility,
  VisibilityOff
} from "@mui/icons-material";

import {
  Link as RouterLink,
  useNavigate
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slice/authSlice";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const [showPassword, setShowPassword] = useState(false);

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

    try {

      /*
        Backend API call example:

        const response = await axios.post(
          "/api/auth/login",
          formData
        );

        const {user, token} = response.data;
      */


      // Temporary response
      const user = {
        id: 1,
        name: "Admin",
        email: formData.email,
        role: "ADMIN"
      };


      const token = "sample-jwt-token";


      dispatch(
        loginSuccess({
          user,
          token
        })
      );


      navigate("/admin/dashboard");


    } catch (err) {

      setError(
        "Invalid email or password"
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
        Login
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
          type={
            showPassword ? "text" : "password"
          }
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required

          InputProps={{
            endAdornment: (

              <InputAdornment position="end">

                <IconButton
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {
                    showPassword
                    ?
                    <VisibilityOff />
                    :
                    <Visibility />
                  }

                </IconButton>

              </InputAdornment>

            )
          }}

        />


        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            mt:3,
            mb:2
          }}
        >
          Login
        </Button>


      </form>


      <Box
        display="flex"
        justifyContent="space-between"
      >

        <Link
          component={RouterLink}
          to="/forgot-password"
          underline="hover"
        >
          Forgot Password?
        </Link>


        <Link
          component={RouterLink}
          to="/register"
          underline="hover"
        >
          Create Account
        </Link>


      </Box>


    </Box>

  );
};


export default Login;