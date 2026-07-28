import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    // Login success
    loginSuccess: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.error = null;

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "token",
        token
      );
    },


    // Register success
    registerSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload.user)
      );

      localStorage.setItem(
        "token",
        action.payload.token
      );
    },


    // Logout
    logout: (state) => {

      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },


    // Loading
    setLoading: (state, action) => {
      state.loading = action.payload;
    },


    // Error handling
    setError: (state, action) => {
      state.error = action.payload;
    },


    // Clear error
    clearError: (state) => {
      state.error = null;
    }

  },
});


export const {
  loginSuccess,
  registerSuccess,
  logout,
  setLoading,
  setError,
  clearError,
} = authSlice.actions;


export default authSlice.reducer;