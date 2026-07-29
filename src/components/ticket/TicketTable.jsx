import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HistoryIcon from "@mui/icons-material/History";

import StatusChip from "./StatusChip";

const TicketTable = ({
  tickets = [],
  onView,
  onEdit,
  onDelete,
  onHistory,
}) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "error";
      case "High":
        return "warning";
      case "Medium":
        return "primary";
      case "Low":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Ticket ID</strong></TableCell>
            <TableCell><strong>Title</strong></TableCell>
            <TableCell><strong>Category</strong></TableCell>
            <TableCell><strong>Priority</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Created</strong></TableCell>
            <TableCell align="center">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tickets.map((ticket) => (
            <TableRow
              key={ticket._id}
              hover
            >
              <TableCell>{ticket._id}</TableCell>

              <TableCell>{ticket.title}</TableCell>

              <TableCell>{ticket.category}</TableCell>

              <TableCell>
                <Chip
                  label={ticket.priority}
                  color={getPriorityColor(ticket.priority)}
                  size="small"
                />
              </TableCell>

              <TableCell>
                <StatusChip status={ticket.status} />
              </TableCell>

              <TableCell>
                {ticket.createdAt
                  ? new Date(ticket.createdAt).toLocaleDateString()
                  : "-"}
              </TableCell>

              <TableCell align="center">
                <Tooltip title="View">
                  <IconButton
                    color="primary"
                    onClick={() => onView?.(ticket)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>

                {onEdit && (
                  <Tooltip title="Edit">
                    <IconButton
                      color="warning"
                      onClick={() => onEdit(ticket)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                )}

                {onHistory && (
                  <Tooltip title="History">
                    <IconButton
                      color="info"
                      onClick={() => onHistory(ticket)}
                    >
                      <HistoryIcon />
                    </IconButton>
                  </Tooltip>
                )}

                {onDelete && (
                  <Tooltip title="Delete">
                    <IconButton
                      color="error"
                      onClick={() => onDelete(ticket)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </TableCell>
            </TableRow>
          ))}

          {tickets.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={7}
                align="center"
              >
                No tickets found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketTable;