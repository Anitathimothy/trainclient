import { Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/admin/Dashboard";
import Tickets from "../pages/admin/Tickets";
import Employees from "../pages/admin/Employees";
import Users from "../pages/admin/Users";
import Reports from "../pages/admin/Reports";
import Notifications from "../pages/admin/Notifications";
import Profile from "../pages/admin/Profile";
import Settings from "../pages/admin/Settings";
import TicketDetails from "../pages/admin/TicketDetails";

const AdminRoutes = (
  <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
    <Route element={<MainLayout />}>
      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/tickets" element={<Tickets />} />

      <Route
        path="/admin/tickets/:id"
        element={<TicketDetails />}
      />

      <Route
        path="/admin/employees"
        element={<Employees />}
      />

      <Route
        path="/admin/users"
        element={<Users />}
      />

      <Route
        path="/admin/reports"
        element={<Reports />}
      />

      <Route
        path="/admin/notifications"
        element={<Notifications />}
      />

      <Route
        path="/admin/profile"
        element={<Profile />}
      />

      <Route
        path="/admin/settings"
        element={<Settings />}
      />
    </Route>
  </Route>
);

export default AdminRoutes;