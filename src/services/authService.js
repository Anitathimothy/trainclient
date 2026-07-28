import api from "./api";


// Register
export const registerUser = async (userData) => {
  const response = await api.post(
    "/auth/register",
    userData
  );

  return response.data;
};


// Login
export const loginUser = async (credentials) => {
  const response = await api.post(
    "/auth/login",
    credentials
  );

  return response.data;
};


// Forgot Password
export const forgotPassword = async (email) => {
  const response = await api.post(
    "/auth/forgot-password",
    { email }
  );

  return response.data;
};


// Reset Password
export const resetPassword = async (
  token,
  password
) => {
  const response = await api.post(
    `/auth/reset-password/${token}`,
    {
      password
    }
  );

  return response.data;
};


// Get logged-in user profile
export const getProfile = async () => {
  const response = await api.get(
    "/auth/profile"
  );

  return response.data;
};


// Logout
export const logoutUser = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

};