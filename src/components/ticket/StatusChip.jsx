import React from "react";
import { Chip } from "@mui/material";

const StatusChip = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case "Resolved":
        return "success";
      case "Rejected":
        return "error";
      case "Level 1":
        return "info";
      case "Level 2":
        return "warning";
      case "Level 3":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Chip
      label={status}
      color={getColor()}
      size="small"
    />
  );
};

export default StatusChip;