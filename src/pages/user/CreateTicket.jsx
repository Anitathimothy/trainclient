import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/common/Loader";
import { createTicket } from "../../services/ticketService";

const priorities = ["Low", "Medium", "High", "Critical"];

const categories = [
  "Software",
  "Hardware",
  "Network",
  "Database",
  "Security",
  "Other",
];

const CreateTicket = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    category: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await createTicket(ticket);

      navigate("/user/my-tickets");
    } catch (err) {
      console.error(err);
      setError("Failed to create ticket.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader message="Creating Ticket..." />;
  }

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Create Ticket
      </Typography>

      <Paper sx={{ p: 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Ticket Title"
                name="title"
                value={ticket.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={5}
                label="Description"
                name="description"
                value={ticket.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                select
                label="Category"
                name="category"
                value={ticket.category}
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                  >
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Priority"
                name="priority"
                value={ticket.priority}
                onChange={handleChange}
              >
                {priorities.map((priority) => (
                  <MenuItem
                    key={priority}
                    value={priority}
                  >
                    {priority}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
              >
                Submit Ticket
              </Button>

              <Button
                sx={{ ml: 2 }}
                variant="outlined"
                onClick={() => navigate("/user/my-tickets")}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateTicket;