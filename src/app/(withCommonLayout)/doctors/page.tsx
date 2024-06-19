import { Box, Container } from "@mui/material";
import React from "react";
import DashedLine from "./components/Dashline";
import ScrollCategory from "./components/ScrollCategory";
import DoctorCard from "./components/DoctorCard";

interface PropType {
  searchParams: { specialties: string };
}

const Doctors = async ({ searchParams }: PropType) => {
  let res;

  if (searchParams.specialties) {
    res = await fetch(
      `http://localhost:5000/api/v1/doctors?specialties=${searchParams.specialties}`
    );
  } else {
    res = await fetch("http://localhost:5000/api/v1/doctors");
  }

  const { data } = await res.json();



  return (
    <Container>
      <DashedLine />

      <ScrollCategory specialties={searchParams.specialties} />

      <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
        {data?.map((doctor: any, index: number) => (
          <Box key={doctor.id}>
            <DoctorCard doctor={doctor} />

            {index === data.length - 1 ? null : <DashedLine />}
          </Box>
        ))}

        {data.length === 0 && <Box>No Doctor Found With This Specialty</Box>}
      </Box>
    </Container>
  );
};

export default Doctors;
