"use client";

import { useGetSingleUserQuery } from "@/redux/api/Features/userApi";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { red, blue } from "@mui/material/colors";
import Spinner from "@/components/Shared/Spinner";
import { Container } from "@mui/material";

const UserProfile = ({ userInfo }: { userInfo: any }) => {
  const {
    id,
    name,
    email,
    contactNumber,
    profilePhoto,
    role,
    status,
    createdAt,
    updatedAt,
    isDeleted,
    needPasswordChange,
  } = userInfo;

  const handleEditProfile = () => {
    // Add logic for editing profile
  };

  const handleDeleteProfile = () => {
    // Add logic for deleting profile
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 8,
          borderRadius: "xl",
          p: 6,
        }}
      >
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              alt={name}
              src={profilePhoto}
              sx={{ width: 150, height: 150, mx: "auto", my: -16 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" align="center" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1" align="center">
              {email}
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              {contactNumber}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
              <IconButton onClick={handleEditProfile} color="primary">
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={handleDeleteProfile}
                style={{ color: blue[500] }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h6">Details</Typography>
          <Typography variant="body1">Role: {role}</Typography>
          <Typography variant="body1">Status: {status}</Typography>
          <Typography variant="body1">Created At: {createdAt}</Typography>
          <Typography variant="body1">Updated At: {updatedAt}</Typography>
          <Typography variant="body1">
            Deleted: {isDeleted ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1">
            Need Password Change: {needPasswordChange ? "Yes" : "No"}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

const Profile = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <UserProfile userInfo={data} />
    </>
  );
};

export default Profile;
