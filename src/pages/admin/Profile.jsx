import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Alert,
  CircularProgress
} from "@mui/material";

import {
  getProfile,
  updateProfile
} from "../../services/userService";

const Profile = () => {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      const response = await getProfile();

      setProfile(response.user);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setSaving(true);

      await updateProfile(profile);

      setMessage("Profile updated successfully.");

    } catch (error) {

      console.error(error);

    } finally {

      setSaving(false);

    }

  };

  if (loading) {

    return (
      <Box
        display="flex"
        justifyContent="center"
        mt={5}
      >
        <CircularProgress />
      </Box>
    );

  }

  return (

    <Box>

      <Typography
        variant="h4"
        mb={3}
      >
        My Profile
      </Typography>

      {message && (
        <Alert
          severity="success"
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      )}

      <Card>

        <CardContent>

          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              xs={12}
              md={3}
              textAlign="center"
            >

              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 2
                }}
              >
                {profile.name?.charAt(0)}
              </Avatar>

              <Typography variant="h6">
                {profile.name}
              </Typography>

              <Typography color="text.secondary">
                {profile.role}
              </Typography>

            </Grid>

            <Grid
              item
              xs={12}
              md={9}
            >

              <Box
                component="form"
                onSubmit={handleSubmit}
              >

                <Grid
                  container
                  spacing={2}
                >

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={profile.email}
                      disabled
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Department"
                      name="department"
                      value={profile.department}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={saving}
                    >
                      {saving
                        ? "Updating..."
                        : "Update Profile"}
                    </Button>
                  </Grid>

                </Grid>

              </Box>

            </Grid>

          </Grid>

        </CardContent>

      </Card>

    </Box>

  );

};

export default Profile;