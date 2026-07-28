import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 2,
        px: 3,
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
        bgcolor: "#fafafa",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Ticket Management System. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;