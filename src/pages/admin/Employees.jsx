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
  Button,
  TextField,
  IconButton,
  Chip
} from "@mui/material";

import {
  Add,
  Edit,
  Delete
} from "@mui/icons-material";


const Employees = () => {


  const [search, setSearch] = useState("");


  const employees = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      department: "Technical Support",
      role: "LEVEL_1",
      status: "Active"
    },
    {
      id: 2,
      name: "David Wilson",
      email: "david@example.com",
      department: "Payment Support",
      role: "LEVEL_2",
      status: "Active"
    },
    {
      id: 3,
      name: "Sarah James",
      email: "sarah@example.com",
      department: "Customer Support",
      role: "EMPLOYEE",
      status: "Inactive"
    }
  ];


  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      employee.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );


  return (

    <Box sx={{ p: 3 }}>


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
          Employees
        </Typography>


        <Button
          variant="contained"
          startIcon={<Add />}
        >
          Add Employee
        </Button>

      </Box>



      <TextField
        label="Search Employee"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        sx={{
          mb: 3,
          width: 300
        }}
      />



      <TableContainer
        component={Paper}
      >

        <Table>


          <TableHead>

            <TableRow>

              <TableCell>
                Name
              </TableCell>

              <TableCell>
                Email
              </TableCell>

              <TableCell>
                Department
              </TableCell>

              <TableCell>
                Role
              </TableCell>

              <TableCell>
                Status
              </TableCell>

              <TableCell>
                Actions
              </TableCell>

            </TableRow>

          </TableHead>



          <TableBody>

            {
              filteredEmployees.map(
                (employee) => (

                <TableRow
                  key={employee.id}
                >

                  <TableCell>
                    {employee.name}
                  </TableCell>


                  <TableCell>
                    {employee.email}
                  </TableCell>


                  <TableCell>
                    {employee.department}
                  </TableCell>


                  <TableCell>
                    <Chip
                      label={employee.role}
                      color="primary"
                      size="small"
                    />
                  </TableCell>


                  <TableCell>

                    <Chip
                      label={employee.status}
                      color={
                        employee.status === "Active"
                        ? "success"
                        : "default"
                      }
                      size="small"
                    />

                  </TableCell>



                  <TableCell>

                    <IconButton
                      color="primary"
                    >
                      <Edit />
                    </IconButton>


                    <IconButton
                      color="error"
                    >
                      <Delete />
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


export default Employees;