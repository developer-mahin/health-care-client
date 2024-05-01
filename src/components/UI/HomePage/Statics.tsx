import { Box, Container, Stack, Typography } from "@mui/material";

type TStaticsData = {
  title: string;
  des: string;
};

const staticsData: TStaticsData[] = [
  {
    title: "180+",
    des: "Expert Doctors",
  },
  {
    title: "26+",
    des: "Expert Services",
  },
  {
    title: "10K+",
    des: "Happy Patients",
  },
  {
    title: "150+",
    des: "Best Award Winners",
  },
];

const Statics = () => {
  return (
    <Container>
      <Box my={10}>
        <Box
          sx={{
            background: "linear-gradient(45deg, #0021FF 0%, #04F9FC 100%)",
            padding: "50px",
            borderRadius: "20px",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            {staticsData.map((data: TStaticsData, i: number) => (
              <Box key={i} color="#fff">
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                  variant="h2"
                  component="h2"
                >
                  {data.title}
                </Typography>
                <Typography variant="h5" component="h5">
                  {data.des}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Statics;
