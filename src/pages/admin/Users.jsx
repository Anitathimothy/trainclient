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
  Edit,
  Delete,
  Visibility
} from "@mui/icons-material";


const Users = () => {

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");


  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      role: "USER",
      status: "Active"
    },
    {
      id: 2,
      name: "David Wilson",
      email: "david@gmail.com",
      role: "EMPLOYEE",
      status: "Active"
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@gmail.com",
      role: "ADMIN",
      status: "Active"
    },
    {
      id: 4,
      name: "Sarah James",
      email: "sarah@gmail.com",
      role: "USER",
      status: "Inactive"
    }
  ];


  const filteredUsers = users.filter((user) => {

    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesRole =
      roleFilter === "ALL" ||
      user.role === roleFilter;


    return matchesSearch && matchesRole;

  });



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
          Users
        </Typography>


        <Button
          variant="contained"
        >
          Add User
        </Button>

      </Box>



      <Box
        display="flex"
        gap={2}
        mb={3}
      >

        <TextField
          label="Search User"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <TextField
          select
          label="Role"
          value={roleFilter}
          onChange={(e) =>
            setRoleFilter(e.target.value)
          }
          sx={{ width: 180 }}
        >

          <MenuItem value="ALL">
            All
          </MenuItem>

          <MenuItem value="USER">
            User
          </MenuItem>

          <MenuItem value="EMPLOYEE">
            Employee
          </MenuItem>

          <MenuItem value="ADMIN">
            Admin
          </MenuItem>

        </TextField>


      </Box>



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
              filteredUsers.map((user) => (

                <TableRow
                  key={user.id}
                >

                  <TableCell>
                    {user.name}
                  </TableCell>


                  <TableCell>
                    {user.email}
                  </TableCell>


                  <TableCell>

                    <Chip
                      label={user.role}
                      color="primary"
                      size="small"
                    />

                  </TableCell>


                  <TableCell>

                    <Chip
                      label={user.status}
                      color={
                        user.status === "Active"
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
                      <Visibility />
                    </IconButton>


                    <IconButton
                      color="secondary"
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


export default Users;