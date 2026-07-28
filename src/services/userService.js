import api from "./api";


// Get logged-in user profile
export const getProfile = async () => {

  const response = await api.get(
    "/users/profile"
  );

  return response.data;

};


// Update logged-in user profile
export const updateProfile = async (data) => {

  const response = await api.put(
    "/users/profile",
    data
  );

  return response.data;

};


// Get all users (Admin)
export const getUsers = async () => {

  const response = await api.get(
    "/users"
  );

  return response.data;

};


// Get user by ID
export const getUserById = async (id) => {

  const response = await api.get(
    `/users/${id}`
  );

  return response.data;

};


// Create user (Admin)
export const createUser = async (data) => {

  const response = await api.post(
    "/users",
    data
  );

  return response.data;

};


// Update user by ID (Admin)
export const updateUser = async (
  id,
  data
) => {

  const response = await api.put(
    `/users/${id}`,
    data
  );

  return response.data;

};


// Delete user (Admin)
export const deleteUser = async (id) => {

  const response = await api.delete(
    `/users/${id}`
  );

  return response.data;

};