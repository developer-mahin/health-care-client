import { CircularProgress, Stack } from "@mui/material";

const Spinner = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "70vh",
      }}
    >
      <CircularProgress />
    </Stack>
  );
};

export default Spinner;
