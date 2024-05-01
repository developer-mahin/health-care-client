import assets from "@/assets";
import worksImage from "@/assets/how-it-works-img.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

type TStepData = {
  icon: any;
  title: string;
  des: string;
};

const GetSolution = () => {
  const stepData: TStepData[] = [
    {
      icon: assets.icons.search,
      title: "Search Doctor",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore.",
    },
    {
      icon: assets.icons.doctor,
      title: "Check Doctor Profile",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore.",
    },
    {
      icon: assets.icons.appointment,
      title: "Search Appointment",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore.",
    },
    {
      icon: assets.icons.charity,
      title: "Get Your Solution",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore.",
    },
  ];

  return (
    <Container>
      <Box py={10}>
        <Box>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            How it Works
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            $ Easy Steps to Get Your Solution
          </Typography>
          <Typography variant="body1" color="secondary" width={600}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            perspiciatis ab, commodi magnam explicabo placeat quibusdam!
          </Typography>
        </Box>
        <Grid container>
          <Grid item md={6}>
            <Image src={worksImage} alt="worksImage" width={700} />
          </Grid>
          <Grid item md={6} container gap={3}>
            {stepData.map((data: TStepData, i: number) => (
              <Grid
                md={5}
                key={i}
                sx={{
                  border: "1px solid #1586FD",
                  borderRadius: "10px",
                  padding: "30px 20px",
                }}
              >
                <Image src={data.icon} alt="icon" width={40} />
                <Box mt={2}>
                  <Typography variant="h6" component="h6" fontWeight={500}>
                    {data.title}
                  </Typography>
                  <Typography mt={1} variant="body1" color="secondary">
                    {data.des}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default GetSolution;
