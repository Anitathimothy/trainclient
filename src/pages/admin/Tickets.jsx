import React, { useState } from "react";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  Button,
  Chip,
  IconButton
} from "@mui/material";

import {
  Visibility,
  Edit
} from "@mui/icons-material";


const Tickets = () => {

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("ALL");


  const tickets = [
    {
      id: "TKT001",
      title: "Unable to login",
      user: "John Smith",
      priority: "High",
      status: "OPEN",
      assignedTo: "Employee 1"
    },
    {
      id: "TKT002",
      title: "Payment failed",
      user: "David",
      priority: "Critical",
      status: "IN_PROGRESS",
      assignedTo: "Employee 2"
    },
    {
      id: "TKT003",
      title: "Profile update issue",
      user: "Sarah",
      priority: "Low",
      status: "RESOLVED",
      assignedTo: "Employee 3"
    }
  ];


  const filteredTickets = tickets.filter((ticket) => {

    const matchesSearch =
      ticket.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      ticket.id
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesStatus =
      statusFilter === "ALL" ||
      ticket.status === statusFilter;


    return matchesSearch && matchesStatus;

  });



  const getStatusColor = (status) => {

    switch(status) {

      case "OPEN":
        return "error";

      case "IN_PROGRESS":
        return "warning";

      case "RESOLVED":
        return "success";

      default:
        return "default";
    }

  };


  const getPriorityColor = (priority) => {

    switch(priority) {

      case "Critical":
        return "error";

      case "High":
        return "warning";

      case "Low":
        return "success";

      default:
        return "default";
    }

  };


  return (

    <Box sx={{p:3}}>


      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Tickets
      </Typography>



      <Box
        display="flex"
        gap={2}
        mb={3}
      >

        <TextField
          label="Search Ticket"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />


        <TextField
          select
          label="Status"
          value={statusFilter}
          onChange={(e)=>setStatusFilter(e.target.value)}
          sx={{width:180}}
        >

          <MenuItem value="ALL">
            All
          </MenuItem>

          <MenuItem value="OPEN">
            Open
          </MenuItem>

          <MenuItem value="IN_PROGRESS">
            In Progress
          </MenuItem>

          <MenuItem value="RESOLVED">
            Resolved
          </MenuItem>

        </TextField>


        <Button
          variant="contained"
        >
          Create Ticket
        </Button>


      </Box>



      <TableContainer component={Paper}>

        <Table>


          <TableHead>

            <TableRow>

              <TableCell>
                Ticket ID
              </TableCell>

              <TableCell>
                Title
              </TableCell>

              <TableCell>
                User
              </TableCell>

              <TableCell>
                Priority
              </TableCell>

              <TableCell>
                Status
              </TableCell>

              <TableCell>
                Assigned To
              </TableCell>

              <TableCell>
                Actions
              </TableCell>

            </TableRow>

          </TableHead>



          <TableBody>

            {
              filteredTickets.map((ticket)=>(

                <TableRow key={ticket.id}>


                  <TableCell>
                    {ticket.id}
                  </TableCell>


                  <TableCell>
                    {ticket.title}
                  </TableCell>


                  <TableCell>
                    {ticket.user}
                  </TableCell>


                  <TableCell>

                    <Chip
                      label={ticket.priority}
                      color={getPriorityColor(ticket.priority)}
                      size="small"
                    />

                  </TableCell>


                  <TableCell>

                    <Chip
                      label={ticket.status}
                      color={getStatusColor(ticket.status)}
                      size="small"
                    />

                  </TableCell>


                  <TableCell>
                    {ticket.assignedTo}
                  </TableCell>


                  <TableCell>

                    <IconButton color="primary">
                      <Visibility />
                    </IconButton>


                    <IconButton color="secondary">
                      <Edit />
                    </IconButton>


                  </TableCell>


                </TableRow>

              ))
            }


          </TableBody>


        </Table>

      </TableContainer>


    </Box>

  );
};


export default Tickets;