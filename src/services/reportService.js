import api from "../api/api";

// Get report summary
export const getReportSummary = async () => {
  const response = await api.get("/reports/summary");
  return response.data;
};

// Get dashboard statistics
export const getDashboardStats = async () => {
  const response = await api.get("/reports/dashboard");
  return response.data;
};

// Get ticket status report
export const getTicketStatusReport = async () => {
  const response = await api.get("/reports/tickets/status");
  return response.data;
};

// Get ticket priority report
export const getTicketPriorityReport = async () => {
  const response = await api.get("/reports/tickets/priority");
  return response.data;
};

// Get employee performance report
export const getEmployeePerformanceReport = async () => {
  const response = await api.get("/reports/employees");
  return response.data;
};

// Get user report
export const getUserReport = async () => {
  const response = await api.get("/reports/users");
  return response.data;
};

// Get ticket trend report
export const getTicketTrendReport = async () => {
  const response = await api.get("/reports/trends");
  return response.data;
};

// Get report by date range
export const getReportByDateRange = async (startDate, endDate) => {
  const response = await api.get("/reports/date-range", {
    params: {
      startDate,
      endDate,
    },
  });

  return response.data;
};

// Export report as PDF
export const exportReportPDF = async () => {
  const response = await api.get("/reports/export/pdf", {
    responseType: "blob",
  });

  return response.data;
};

// Export report as Excel
export const exportReportExcel = async () => {
  const response = await api.get("/reports/export/excel", {
    responseType: "blob",
  });

  return response.data;
};