"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";

const DoctorsPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box mt={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={handleClickOpen}>Create A New Doctor</Button>
        <DoctorModal open={open} setOpen={setOpen} />
        <TextField
          size="small"
          placeholder="Search"
          variant="outlined"
          label="Search"
        />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
