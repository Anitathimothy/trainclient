import { Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/user/Dashboard";
import CreateTicket from "../pages/user/CreateTicket";
import MyTickets from "../pages/user/MyTickets";
import TicketDetails from "../pages/user/TicketDetails";
import Notifications from "../pages/user/Notifications";
import Profile from "../pages/user/Profile";

const UserRoutes = (
  <Route element={<ProtectedRoute allowedRoles={["USER"]} />}>
    <Route element={<MainLayout />}>
      <Route
        path="/user/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/user/create-ticket"
        element={<CreateTicket />}
      />

      <Route
        path="/user/mytickets"
        element={<MyTickets />}
      />

      <Route
        path="/user/tickets/:id"
        element={<TicketDetails />}
      />

      <Route
        path="/user/notifications"
        element={<Notifications />}
      />

      <Route
        path="/user/profile"
        element={<Profile />}
      />
    </Route>
  </Route>
);

export default UserRoutes;