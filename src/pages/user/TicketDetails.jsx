import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../../components/common/Loader";
import TicketDetailsComponent from "../../components/ticket/TicketDetails";
import { getTicketById } from "../../services/ticketService";

const TicketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTicket();
  }, [id]);

  const loadTicket = async () => {
    try {
      setLoading(true);

      const data = await getTicketById(id);
      setTicket(data);
    } catch (error) {
      console.error("Failed to load ticket:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader message="Loading Ticket..." />;
  }

  return (
    <Box p={3}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Ticket Details
      </Typography>

      <Paper elevation={3} sx={{ p: 3 }}>
        <TicketDetailsComponent ticket={ticket} />
      </Paper>
    </Box>
  );
};

export default TicketDetails;