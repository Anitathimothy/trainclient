import api from "./api";


// Get dashboard summary
export const getDashboardStats = async () => {
  const response = await api.get(
    "/dashboard/stats"
  );

  return response.data;
};


// Admin dashboard data
export const getAdminDashboard = async () => {
  const response = await api.get(
    "/dashboard/admin"
  );

  return response.data;
};


// Employee dashboard data
export const getEmployeeDashboard = async () => {
  const response = await api.get(
    "/dashboard/employee"
  );

  return response.data;
};


// User dashboard data
export const getUserDashboard = async () => {
  const response = await api.get(
    "/dashboard/user"
  );

  return response.data;
};