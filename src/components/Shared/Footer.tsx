import { TNavItem, navItem } from "@/Data/navItem";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import xIcon from "@/assets/landing_page/twitter.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import linkedInkIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box bgcolor="rgb(17, 26, 34)" py={8}>
      <Container>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          gap={4}
        >
          {navItem.map((item: TNavItem, index: number) => (
            <Typography
              color="#ddd"
              fontWeight={600}
              component={Link}
              key={index}
              href={item.path}
            >
              {item.name}
            </Typography>
          ))}
        </Stack>
        <div className="border-b-[1px] border-dashed mt-5"></div>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="row"
          gap={4}
          my={4}
        >
          <Image src={facebookIcon} alt="" width={40} height={40} />
          <Image src={instagramIcon} alt="" width={40} height={40} />
          <Image src={xIcon} alt="" width={40} height={40} />
          <Image src={linkedInkIcon} alt="" width={40} height={40} />
        </Stack>

        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Typography color="#ddd">
            &copy; {year} PH Health Care. All Rights Reserved
          </Typography>
          <Typography
            color="#ddd"
            variant="h3"
            component={Link}
            href="/"
            fontWeight={600}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>

          <Typography color="#ddd">
            Privacy Policy {"|"} Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
