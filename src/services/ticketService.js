import api from './api.js'

// Get all tickets (Admin)
export const getAllTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

// Get logged-in user's tickets (Requester)
export const getMyTickets = async () => {
  const response = await api.get("/tickets/my");
  return response.data;
};

// Get assigned tickets (Employee)
export const getAssignedTickets = async () => {
  const response = await api.get("/tickets/assigned");
  return response.data;
};

// Get ticket by ID
export const getTicketById = async (id) => {
  const response = await api.get(`/tickets/${id}`);
  return response.data;
};

// Create ticket
export const createTicket = async (ticketData) => {
  const response = await api.post("/tickets", ticketData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Update ticket
export const updateTicket = async (id, ticketData) => {
  const response = await api.put(`/tickets/${id}`, ticketData);
  return response.data;
};

// Delete ticket
export const deleteTicket = async (id) => {
  const response = await api.delete(`/tickets/${id}`);
  return response.data;
};

// Process ticket (Employee)
export const processTicket = async (id, data) => {
  const response = await api.put(`/tickets/process/${id}`, data);
  return response.data;
};

// Assign ticket (Admin)
export const assignTicket = async (id, employeeId) => {
  const response = await api.put(`/tickets/assign/${id}`, {
    employeeId,
  });

  return response.data;
};

// Get ticket history
export const getTicketHistory = async (id) => {
  const response = await api.get(`/tickets/${id}/history`);
  return response.data;
};

// Get dashboard statistics
export const getDashboardStats = async () => {
  const response = await api.get("/tickets/dashboard");
  return response.data;
};