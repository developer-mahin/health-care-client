import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import chooseUsImg from "@/assets/choose-us.png";

type TServiceData = {
  imageSrc: string;
  title: string;
  description: string;
};

const servicesData: TServiceData[] = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
      </Box>

      <Grid
        sx={{
          py: 10,
        }}
        alignItems="center"
        container
        spacing={2}
      >
        <Grid item md={6}>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "rgba(245, 245, 245, 1)",
              padding: "20px",
              alignItems: "center",
              borderRadius: "10px 100px 10px 10px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Image src={servicesData[0].imageSrc} alt="award" width={50} />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[0].title}
              </Typography>
              <Typography
                variant="body2"
                color="primary.body1"
                fontWeight={300}
              >
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "rgba(245, 245, 245, 1)",
              padding: "20px",
              alignItems: "center",
              borderRadius: "10px 100px 10px 10px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Image src={servicesData[1].imageSrc} alt="award" width={50} />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[1].title}
              </Typography>
              <Typography
                variant="body2"
                color="primary.body1"
                fontWeight={300}
              >
                {servicesData[1].description}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "rgba(245, 245, 245, 1)",
              padding: "20px",
              alignItems: "center",
              borderRadius: "10px 10px 100px 10px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Image src={servicesData[2].imageSrc} alt="award" width={50} />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[2].title}
              </Typography>
              <Typography
                variant="body2"
                color="primary.body1"
                fontWeight={300}
              >
                {servicesData[2].description}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "15px",
              backgroundColor: "rgba(245, 245, 245, 1)",
              padding: "20px",
              alignItems: "center",
              borderRadius: "10px 100px 10px 10px",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Image src={servicesData[3].imageSrc} alt="award" width={50} />
            </Box>
            <Box>
              <Typography variant="h6" component="h6" fontWeight={600}>
                {servicesData[3].title}
              </Typography>
              <Typography
                variant="body2"
                color="primary.body1"
                fontWeight={300}
              >
                {servicesData[3].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box>
            <Image src={chooseUsImg} alt="Choose Us Image" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
