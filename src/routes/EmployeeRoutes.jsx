import { Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/employee/Dashboard";
import AssignedTickets from "../pages/employee/AssignedTickets";
import MyTickets from "../pages/employee/MyTickets";
import TicketDetails from "../pages/employee/TicketDetails";
import Notifications from "../pages/employee/Notifications";
import Profile from "../pages/employee/Profile";

const EmployeeRoutes = (
  <Route element={<ProtectedRoute allowedRoles={["EMPLOYEE"]} />}>
    <Route element={<MainLayout />}>
      {/* Dashboard */}
      <Route
        path="/employee/dashboard"
        element={<Dashboard />}
      />

      {/* Assigned Tickets */}
      <Route
        path="/employee/assigned-tickets"
        element={<AssignedTickets />}
      />

      {/* My Tickets */}
      <Route
        path="/employee/my-tickets"
        element={<MyTickets />}
      />

      {/* Ticket Details */}
      <Route
        path="/employee/tickets/:id"
        element={<TicketDetails />}
      />

      {/* Notifications */}
      <Route
        path="/employee/notifications"
        element={<Notifications />}
      />

      {/* Profile */}
      <Route
        path="/employee/profile"
        element={<Profile />}
      />
    </Route>
  </Route>
);

export default EmployeeRoutes;