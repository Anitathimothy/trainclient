import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const AuthCard = ({ title, subtitle, children }) => {
  return (
    <Card
      elevation={6}
      sx={{
        maxWidth: 450,
        width: "100%",
        mx: "auto",
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            {title}
          </Typography>

          {subtitle && (
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        {children}
      </CardContent>
    </Card>
  );
};

export default AuthCard;