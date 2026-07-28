import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import AuthRoutes from "./AuthRoutes";
import AdminRoutes from "./AdminRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import UserRoutes from "./UserRoutes";
import Unauthorized from "../pages/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication Routes */}
      {AuthRoutes()}
      {/* Protected Application Layout */}
      <Route element={<MainLayout />}>

        {/* Admin Routes */}
        {AdminRoutes()}

        {/* Employee Routes */}
        {EmployeeRoutes()}

        {/* User Routes */}
        {UserRoutes()}



      </Route>


      {/* Default Route */}
      <Route
        path="*"
        element={<h2>404 - Page Not Found</h2>}
      />

      <Route
  path="/unauthorized"
  element={<Unauthorized />}
/>

    </Routes>
  );
};

export default AppRoutes;