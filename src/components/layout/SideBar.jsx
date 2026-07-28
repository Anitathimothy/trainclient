import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const role = user?.role || "USER";

  const adminMenu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
    { text: "Tickets", icon: <ConfirmationNumberIcon />, path: "/admin/tickets" },
    { text: "Employees", icon: <PeopleIcon />, path: "/admin/employees" },
    { text: "Users", icon: <PersonIcon />, path: "/admin/users" },
    { text: "Reports", icon: <AssessmentIcon />, path: "/admin/reports" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/admin/notifications" },
    { text: "AI Assistant", icon: <SmartToyIcon />, path: "/admin/ai" },
    { text: "Profile", icon: <PersonIcon />, path: "/admin/profile" },
    { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
  ];

  const employeeMenu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/employee/dashboard" },
    { text: "Assigned Tickets", icon: <ConfirmationNumberIcon />, path: "/employee/assigned" },
    { text: "My Tickets", icon: <ConfirmationNumberIcon />, path: "/employee/mytickets" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/employee/notifications" },
    { text: "Profile", icon: <PersonIcon />, path: "/employee/profile" },
  ];

  const userMenu = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/user/dashboard" },
    { text: "Create Ticket", icon: <ConfirmationNumberIcon />, path: "/user/create-ticket" },
    { text: "My Tickets", icon: <ConfirmationNumberIcon />, path: "/user/mytickets" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/user/notifications" },
    { text: "Profile", icon: <PersonIcon />, path: "/user/profile" },
  ];

  const menu =
    role === "ADMIN"
      ? adminMenu
      : role === "EMPLOYEE"
      ? employeeMenu
      : userMenu;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <Divider />

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;