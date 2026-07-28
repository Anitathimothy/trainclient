import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
  Divider,
  Button,
  Stack,
  Avatar,
} from "@mui/material";
import {
  ArrowBack,
  Edit,
  AssignmentTurnedIn,
  Person,
  CalendarMonth,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

const TicketDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Temporary data (replace with API call)
  const ticket = {
    id: id || "TKT-1001",
    title: "Unable to Login",
    description:
      "User cannot login after resetting the password. Error displayed is 'Invalid Credentials'.",
    category: "Authentication",
    priority: "High",
    status: "In Progress",
    createdBy: "John Doe",
    assignedTo: "Level 1 Support",
    createdAt: "28 July 2026",
    updatedAt: "29 July 2026",
  };

  const statusColor = {
    Open: "warning",
    "In Progress": "info",
    Resolved: "success",
    Closed: "default",
  };

  const priorityColor = {
    Low: "success",
    Medium: "warning",
    High: "error",
    Critical: "secondary",
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button
        startIcon={<ArrowBack />}
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h4" fontWeight="bold">
            Ticket Details
          </Typography>

          <Button
            variant="contained"
            startIcon={<Edit />}
          >
            Edit Ticket
          </Button>
        </Stack>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Ticket ID
            </Typography>
            <Typography variant="h6">{ticket.id}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Title
            </Typography>
            <Typography variant="h6">{ticket.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Description
            </Typography>
            <Typography>{ticket.description}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Category
            </Typography>
            <Typography>{ticket.category}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Priority
            </Typography>

            <Chip
              label={ticket.priority}
              color={priorityColor[ticket.priority]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Status
            </Typography>

            <Chip
              label={ticket.status}
              color={statusColor[ticket.status]}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Assigned To
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 32, height: 32 }}>
                <Person />
              </Avatar>
              <Typography>{ticket.assignedTo}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Created By
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 32, height: 32 }}>
                <Person />
              </Avatar>
              <Typography>{ticket.createdBy}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Created Date
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonth fontSize="small" />
              <Typography>{ticket.createdAt}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Last Updated
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonth fontSize="small" />
              <Typography>{ticket.updatedAt}</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AssignmentTurnedIn />}
          >
            Mark as Resolved
          </Button>

          <Button
            variant="outlined"
            color="primary"
            startIcon={<Edit />}
          >
            Update Ticket
          </Button>

          <Button
            variant="outlined"
            color="error"
          >
            Close Ticket
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default TicketDetails;