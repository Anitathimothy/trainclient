import { useEffect, useState } from "react";

import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Chip,
  CircularProgress,
  Stack
} from "@mui/material";

import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification
} from "../../services/notificationService";

const Notifications = () => {

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {

    try {

      const response = await getNotifications();

      setNotifications(response.notifications || []);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const handleRead = async (id) => {

    await markAsRead(id);

    loadNotifications();

  };

  const handleReadAll = async () => {

    await markAllAsRead();

    loadNotifications();

  };

  const handleDelete = async (id) => {

    await deleteNotification(id);

    loadNotifications();

  };

  if (loading) {

    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );

  }

  return (

    <Box>

      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>

      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Button
          variant="contained"
          onClick={handleReadAll}
        >
          Mark All Read
        </Button>
      </Stack>

      <Paper>

        <List>

          {notifications.length === 0 ? (

            <ListItem>

              <ListItemText
                primary="No notifications available."
              />

            </ListItem>

          ) : (

            notifications.map((notification) => (

              <ListItem
                key={notification._id}
                divider
              >

                <ListItemText
                  primary={notification.message}
                  secondary={
                    new Date(
                      notification.createdAt
                    ).toLocaleString()
                  }
                />

                <Chip
                  label={
                    notification.isRead
                      ? "Read"
                      : "Unread"
                  }
                  color={
                    notification.isRead
                      ? "success"
                      : "warning"
                  }
                  sx={{ mr: 2 }}
                />

                <ListItemSecondaryAction>

                  {!notification.isRead && (

                    <Button
                      size="small"
                      onClick={() =>
                        handleRead(notification._id)
                      }
                    >
                      Read
                    </Button>

                  )}

                  <Button
                    color="error"
                    size="small"
                    onClick={() =>
                      handleDelete(notification._id)
                    }
                  >
                    Delete
                  </Button>

                </ListItemSecondaryAction>

              </ListItem>

            ))

          )}

        </List>

      </Paper>

    </Box>

  );

};

export default Notifications;