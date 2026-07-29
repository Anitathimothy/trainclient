import React from "react";
import {
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TicketSearch = ({
  searchTerm,
  setSearchTerm,
  placeholder = "Search tickets...",
}) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TicketSearch;