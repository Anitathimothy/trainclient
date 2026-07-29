import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../services/authService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "USER",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);
      setError("");

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
      };

      await register(payload);

      navigate("/login");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Registration failed."
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
        label="Full Name"
        name="name"
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        required
      />

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
        label="Phone Number"
        name="phone"
        margin="normal"
        value={formData.phone}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        select
        label="Role"
        name="role"
        margin="normal"
        value={formData.role}
        onChange={handleChange}
      >
        <MenuItem value="USER">User</MenuItem>
        <MenuItem value="EMPLOYEE">Employee</MenuItem>
      </TextField>

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

      <TextField
        fullWidth
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        margin="normal"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{ mt: 3 }}
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Register"}
      </Button>

      <Box textAlign="center" mt={2}>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </Box>
    </Box>
  );
};

export default RegisterForm;