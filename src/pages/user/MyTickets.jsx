import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/common/Loader";
import NoData from "../../components/common/NoData";
import TicketSearch from "../../components/ticket/TicketSearch";
import TicketTable from "../../components/ticket/TicketTable";

import { getAssignedTickets } from "../../services/ticketService";

const MyTickets = () => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTickets();
  }, []);

  useEffect(() => {
    const filtered = tickets.filter(
      (ticket) =>
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTickets(filtered);
  }, [searchTerm, tickets]);

  const loadTickets = async () => {
    try {
      setLoading(true);

      const data = await getAssignedTickets();

      setTickets(data);
      setFilteredTickets(data);
    } catch (error) {
      console.error("Failed to load tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (ticket) => {
    navigate(`/employee/tickets/${ticket._id}`);
  };

  const handleHistory = (ticket) => {
    navigate(`/employee/tickets/history/${ticket._id}`);
  };

  if (loading) {
    return <Loader message="Loading My Tickets..." />;
  }

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        My Tickets
      </Typography>

      <TicketSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredTickets.length === 0 ? (
        <NoData
          title="No Tickets Found"
          message="No tickets are assigned to you."
        />
      ) : (
        <TicketTable
          tickets={filteredTickets}
          onView={handleView}
          onHistory={handleHistory}
        />
      )}
    </Box>
  );
};

export default MyTickets;