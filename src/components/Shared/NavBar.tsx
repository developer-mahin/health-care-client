"use client";

import { TNavItem, navItem } from "@/Data/navItem";
import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/Action/logoutUser";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Nav, NavLink } from "../UI/NavItem";

const NavBar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
  };

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

        {userInfo?.id ? (
          <Button color="error" onClick={handleLogOut} sx={{ boxShadow: 0 }}>
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default NavBar;
