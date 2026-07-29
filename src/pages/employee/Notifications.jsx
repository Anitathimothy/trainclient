import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DoneIcon from "@mui/icons-material/Done";

import Loader from "../../components/common/Loader";
import NoData from "../../components/common/NoData";

import {
  getNotifications,
  markAsRead,
} from "../../services/notificationService";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      setLoading(true);

      const data = await getNotifications();
      setNotifications(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);

      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader message="Loading Notifications..." />;
  }

  if (notifications.length === 0) {
    return (
      <NoData
        title="No Notifications"
        message="You don't have any notifications."
      />
    );
  }

  return (
    <Box p={3}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Notifications
      </Typography>

      <Stack spacing={2}>
        {notifications.map((notification) => (
          <Card key={notification._id} elevation={2}>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" gap={2}>
                  <NotificationsActiveIcon color="primary" />

                  <Box>
                    <Typography variant="h6">
                      {notification.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {notification.message}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {new Date(
                        notification.createdAt
                      ).toLocaleString()}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
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
                    size="small"
                  />

                  {!notification.isRead && (
                    <IconButton
                      color="primary"
                      onClick={() =>
                        handleMarkAsRead(
                          notification._id
                        )
                      }
                    >
                      <DoneIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Notifications;