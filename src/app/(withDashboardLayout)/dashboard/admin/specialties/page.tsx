"use client";

import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";
import { useGetAllSpecialtiesQuery } from "@/redux/api/Features/specialties";

const SpecialtiesPage = () => {
  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  console.log(data);

  return (
    <Box mt={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button onClick={handleClickOpen}>Create A New Specialties</Button>
        <SpecialtiesModal open={open} setOpen={setOpen} />
        <TextField
          size="small"
          placeholder="Search"
          variant="outlined"
          label="Search"
        />
      </Stack>
      <Box>
        <h2>Specialties</h2>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
