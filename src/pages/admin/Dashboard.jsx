import React from "react";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

import {
  ConfirmationNumber,
  CheckCircle,
  Pending,
  People
} from "@mui/icons-material";


const Dashboard = () => {


  const stats = [
    {
      title: "Total Tickets",
      count: 120,
      icon: <ConfirmationNumber fontSize="large" />
    },
    {
      title: "Open Tickets",
      count: 45,
      icon: <Pending fontSize="large" />
    },
    {
      title: "Resolved Tickets",
      count: 65,
      icon: <CheckCircle fontSize="large" />
    },
    {
      title: "Employees",
      count: 15,
      icon: <People fontSize="large" />
    }
  ];


  const tickets = [
    {
      id: "TKT001",
      title: "Login issue",
      user: "John",
      status: "Open"
    },
    {
      id: "TKT002",
      title: "Payment failed",
      user: "Anita",
      status: "Resolved"
    },
    {
      id: "TKT003",
      title: "Account update",
      user: "David",
      status: "Pending"
    }
  ];


  return (

    <Box sx={{ p: 3 }}>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Admin Dashboard
      </Typography>


      {/* Statistics Cards */}

      <Grid container spacing={3}>

        {
          stats.map((item, index) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >

              <Card>

                <CardContent>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >

                    <Box>

                      <Typography
                        color="text.secondary"
                      >
                        {item.title}
                      </Typography>


                      <Typography
                        variant="h4"
                        fontWeight="bold"
                      >
                        {item.count}
                      </Typography>

                    </Box>


                    {item.icon}

                  </Box>

                </CardContent>

              </Card>

            </Grid>

          ))
        }

      </Grid>



      {/* Recent Tickets */}

      <Typography
        variant="h5"
        fontWeight="bold"
        mt={5}
        mb={2}
      >
        Recent Tickets
      </Typography>


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
                Status
              </TableCell>

            </TableRow>

          </TableHead>


          <TableBody>

            {
              tickets.map((ticket) => (

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
                    {ticket.status}
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


export default Dashboard;