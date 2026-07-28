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
  Chip,
  IconButton,
  Button
} from "@mui/material";

import {
  Visibility,
  Update
} from "@mui/icons-material";


const AssignedTickets = () => {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");


  const tickets = [
    {
      id: "TKT101",
      title: "Unable to login",
      customer: "John Smith",
      priority: "High",
      status: "OPEN",
      createdAt: "28-07-2026"
    },
    {
      id: "TKT102",
      title: "Payment issue",
      customer: "David",
      priority: "Critical",
      status: "IN_PROGRESS",
      createdAt: "27-07-2026"
    },
    {
      id: "TKT103",
      title: "Profile update",
      customer: "Sarah",
      priority: "Low",
      status: "RESOLVED",
      createdAt: "26-07-2026"
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



  const statusColor = (status) => {

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


  const priorityColor = (priority) => {

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
        Assigned Tickets
      </Typography>


      <Box
        display="flex"
        gap={2}
        mb={3}
      >

        <TextField
          label="Search Ticket"
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
        />


        <TextField
          select
          label="Status"
          value={statusFilter}
          onChange={(e)=>
            setStatusFilter(e.target.value)
          }
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
                Customer
              </TableCell>

              <TableCell>
                Priority
              </TableCell>

              <TableCell>
                Status
              </TableCell>

              <TableCell>
                Created Date
              </TableCell>

              <TableCell>
                Action
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
                    {ticket.customer}
                  </TableCell>


                  <TableCell>

                    <Chip
                      label={ticket.priority}
                      color={priorityColor(ticket.priority)}
                      size="small"
                    />

                  </TableCell>


                  <TableCell>

                    <Chip
                      label={ticket.status}
                      color={statusColor(ticket.status)}
                      size="small"
                    />

                  </TableCell>


                  <TableCell>
                    {ticket.createdAt}
                  </TableCell>


                  <TableCell>

                    <IconButton color="primary">
                      <Visibility/>
                    </IconButton>


                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Update/>}
                    >
                      Update
                    </Button>

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


export default AssignedTickets;