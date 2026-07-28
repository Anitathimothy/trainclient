import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

import {
  Assessment,
  Download,
  CheckCircle,
  PendingActions,
  Assignment
} from "@mui/icons-material";


const Reports = () => {


  const reportCards = [
    {
      title: "Total Tickets",
      value: 1250,
      icon: <Assignment fontSize="large" />
    },
    {
      title: "Resolved Tickets",
      value: 980,
      icon: <CheckCircle fontSize="large" />
    },
    {
      title: "Pending Tickets",
      value: 270,
      icon: <PendingActions fontSize="large" />
    },
    {
      title: "Resolution Rate",
      value: "78%",
      icon: <Assessment fontSize="large" />
    }
  ];


  const employeeReports = [
    {
      name: "John Smith",
      assigned: 120,
      resolved: 105,
      pending: 15
    },
    {
      name: "David Wilson",
      assigned: 95,
      resolved: 80,
      pending: 15
    },
    {
      name: "Sarah James",
      assigned: 75,
      resolved: 60,
      pending: 15
    }
  ];



  const handleDownload = () => {
    console.log("Downloading report...");
  };


  return (

    <Box sx={{ p:3 }}>


      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          Reports
        </Typography>


        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={handleDownload}
        >
          Export Report
        </Button>

      </Box>



      {/* Report Summary Cards */}

      <Grid container spacing={3}>

        {
          reportCards.map((card,index)=>(

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
                        {card.title}
                      </Typography>


                      <Typography
                        variant="h4"
                        fontWeight="bold"
                      >
                        {card.value}
                      </Typography>

                    </Box>


                    {card.icon}

                  </Box>

                </CardContent>

              </Card>

            </Grid>

          ))
        }

      </Grid>



      {/* Employee Performance */}

      <Typography
        variant="h5"
        fontWeight="bold"
        mt={5}
        mb={2}
      >
        Employee Performance
      </Typography>



      <TableContainer
        component={Paper}
      >

        <Table>


          <TableHead>

            <TableRow>

              <TableCell>
                Employee
              </TableCell>

              <TableCell>
                Assigned Tickets
              </TableCell>

              <TableCell>
                Resolved
              </TableCell>

              <TableCell>
                Pending
              </TableCell>

            </TableRow>

          </TableHead>



          <TableBody>

            {
              employeeReports.map(
                (employee,index)=>(

                <TableRow key={index}>

                  <TableCell>
                    {employee.name}
                  </TableCell>


                  <TableCell>
                    {employee.assigned}
                  </TableCell>


                  <TableCell>
                    {employee.resolved}
                  </TableCell>


                  <TableCell>
                    {employee.pending}
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


export default Reports;