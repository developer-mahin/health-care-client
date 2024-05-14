"use client";

import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  useGetSingleUserQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/Features/userApi";
import AutoFileUploader from "@/components/Form/AutoFileUploder";
import DoctorInformation from "./components/DoctorInformation";
import Spinner from "@/components/Shared/Spinner";
import ProfileUpdateModal from "./components/ProfileUpdateModal";

const DoctorProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetSingleUserQuery({});
  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    try {
      updateMYProfile(formData);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              {data.profilePhoto && (
                <Image
                  height={300}
                  width={400}
                  src={data?.profilePhoto && data?.profilePhoto}
                  alt="Choose User Photo"
                />
              )}
            </Box>
            <Box my={3}>
              {updating ? (
                <p>Uploading...</p>
              ) : (
                <AutoFileUploader
                  name="file"
                  label="Choose Your Profile Photo"
                  icon={<CloudUploadIcon />}
                  onFileUpload={fileUploadHandler}
                  variant="text"
                />
              )}
            </Box>

            <Button
              fullWidth
              endIcon={<ModeEditIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid xs={12} md={8}>
            <DoctorInformation data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DoctorProfile;
