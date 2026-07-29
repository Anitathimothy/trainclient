import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import Loader from "../../components/common/Loader";
import { getDashboardStats } from "../../services/dashboardService";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalTickets: 0,
    pendingTickets: 0,
    resolvedTickets: 0,
    rejectedTickets: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error(error);

      // Demo Data
      setStats({
        totalTickets: 24,
        pendingTickets: 8,
        resolvedTickets: 13,
        rejectedTickets: 3,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader message="Loading Dashboard..." />;
  }

  const cards = [
    {
      title: "Total Tickets",
      value: stats.totalTickets,
      icon: <ConfirmationNumberIcon fontSize="large" color="primary" />,
    },
    {
      title: "Pending",
      value: stats.pendingTickets,
      icon: <PendingActionsIcon fontSize="large" color="warning" />,
    },
    {
      title: "Resolved",
      value: stats.resolvedTickets,
      icon: <CheckCircleIcon fontSize="large" color="success" />,
    },
    {
      title: "Rejected",
      value: stats.rejectedTickets,
      icon: <ErrorOutlineIcon fontSize="large" color="error" />,
    },
  ];

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        User Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              {card.icon}

              <Typography
                variant="h4"
                fontWeight="bold"
                mt={2}
              >
                {card.value}
              </Typography>

              <Typography color="text.secondary">
                {card.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;