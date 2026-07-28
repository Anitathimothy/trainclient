import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotification: true,
    darkMode: false,
    autoAssign: true,
  });

  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>
        Settings
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 700 }}>
        <Typography variant="h6" mb={2}>
          Account Settings
        </Typography>

        <TextField
          fullWidth
          label="Username"
          defaultValue="Admin"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          defaultValue="admin@example.com"
          margin="normal"
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" mb={2}>
          System Preferences
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={settings.emailNotification}
              onChange={handleChange}
              name="emailNotification"
            />
          }
          label="Email Notifications"
        />

        <br />

        <FormControlLabel
          control={
            <Switch
              checked={settings.darkMode}
              onChange={handleChange}
              name="darkMode"
            />
          }
          label="Dark Mode"
        />

        <br />

        <FormControlLabel
          control={
            <Switch
              checked={settings.autoAssign}
              onChange={handleChange}
              name="autoAssign"
            />
          }
          label="Auto Assign Tickets"
        />

        <Divider sx={{ my: 3 }} />

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Paper>
    </Box>
  );
};

export default Settings;