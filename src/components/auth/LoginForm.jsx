import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../services/authService";
import { setCredentials } from "../../redux/slice/authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = await login(formData);

      dispatch(
        setCredentials({
          user: data.user,
          token: data.token,
        })
      );

      switch (data.user.role) {
        case "ADMIN":
          navigate("/admin/dashboard");
          break;

        case "EMPLOYEE":
          navigate("/employee/dashboard");
          break;

        default:
          navigate("/user/dashboard");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        margin="normal"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        margin="normal"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Box
        display="flex"
        justifyContent="flex-end"
        mt={1}
        mb={2}
      >
        <Link to="/forgot-password">
          Forgot Password?
        </Link>
      </Box>

      <Button
        fullWidth
        variant="contained"
        type="submit"
        disabled={loading}
        sx={{ py: 1.5 }}
      >
        {loading ? "Signing In..." : "Login"}
      </Button>

      <Typography
        align="center"
        sx={{ mt: 3 }}
      >
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;