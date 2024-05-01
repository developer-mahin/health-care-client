"use client";

import { TNavItem, navItem } from "@/Data/navItem";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Nav, NavLink } from "../UI/NavItem";
import dynamic from "next/dynamic";

const NavBar = () => {
  const AuthButton = dynamic(() => import("../UI/AuthButton/AuthButton"), {
    ssr: false,
  });

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack>
          <Nav>
            {navItem.map((item: TNavItem, index: number) => (
              <NavLink key={index} href={item.path}>
                {item.name}
              </NavLink>
            ))}
          </Nav>
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default NavBar;
