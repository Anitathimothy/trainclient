import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

import {
  Assignment,
  PendingActions,
  CheckCircle,
  ErrorOutline
} from "@mui/icons-material";


const Dashboard = () => {


  const statistics = [
    {
      title: "Assigned Tickets",
      count: 45,
      icon: <Assignment fontSize="large" />
    },
    {
      title: "Open Tickets",
      count: 15,
      icon: <ErrorOutline fontSize="large" />
    },
    {
      title: "In Progress",
      count: 20,
      icon: <PendingActions fontSize="large" />
    },
    {
      title: "Resolved",
      count: 10,
      icon: <CheckCircle fontSize="large" />
    }
  ];


  const recentTickets = [
    {
      id: "TKT101",
      title: "Login issue",
      priority: "High",
      status: "OPEN"
    },
    {
      id: "TKT102",
      title: "Payment failed",
      priority: "Critical",
      status: "IN_PROGRESS"
    },
    {
      id: "TKT103",
      title: "Profile update",
      priority: "Low",
      status: "RESOLVED"
    }
  ];



  return (

    <Box sx={{ p:3 }}>


      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Employee Dashboard
      </Typography>



      {/* Statistics Cards */}

      <Grid container spacing={3}>

        {
          statistics.map((item,index)=>(

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
        Recent Assigned Tickets
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
                Priority
              </TableCell>

              <TableCell>
                Status
              </TableCell>

            </TableRow>

          </TableHead>



          <TableBody>

            {
              recentTickets.map((ticket)=>(

                <TableRow
                  key={ticket.id}
                >

                  <TableCell>
                    {ticket.id}
                  </TableCell>


                  <TableCell>
                    {ticket.title}
                  </TableCell>


                  <TableCell>
                    {ticket.priority}
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