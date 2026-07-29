import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Chip,
} from "@mui/material";

const TicketDetails = ({ ticket }) => {
  if (!ticket) return null;

  const priorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "error";
      case "High":
        return "warning";
      case "Medium":
        return "primary";
      case "Low":
        return "success";
      default:
        return "default";
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Resolved":
        return "success";
      case "Rejected":
        return "error";
      case "Level 1":
        return "info";
      case "Level 2":
        return "warning";
      case "Level 3":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Ticket Details
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Ticket ID</Typography>
            <Typography>{ticket._id}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Title</Typography>
            <Typography>{ticket.title}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography fontWeight="bold">Description</Typography>
            <Typography>{ticket.description}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Category</Typography>
            <Typography>{ticket.category}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Priority</Typography>

            <Chip
              label={ticket.priority}
              color={priorityColor(ticket.priority)}
              size="small"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Status</Typography>

            <Chip
              label={ticket.status}
              color={statusColor(ticket.status)}
              size="small"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Created By</Typography>
            <Typography>
              {ticket.createdBy?.name || "-"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Assigned To</Typography>
            <Typography>
              {ticket.assignedTo?.name || "Not Assigned"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Created Date</Typography>
            <Typography>{ticket.createdAt}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight="bold">Updated Date</Typography>
            <Typography>{ticket.updatedAt || "-"}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TicketDetails;