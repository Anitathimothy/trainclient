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
        ticket.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTickets(filtered);
  }, [searchTerm, tickets]);

  const loadTickets = async () => {
    try {
      const data = await getAssignedTickets();
      setTickets(data);
      setFilteredTickets(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader message="Loading Tickets..." />;
  }

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        My Tickets
      </Typography>

      <TicketSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredTickets.length === 0 ? (
        <NoData
          title="No Tickets"
          message="No tickets found."
        />
      ) : (
        <TicketTable
          tickets={filteredTickets}
          onView={(ticket) =>
            navigate(`/employee/tickets/${ticket._id}`)
          }
        />
      )}
    </Box>
  );
};

export default MyTickets;