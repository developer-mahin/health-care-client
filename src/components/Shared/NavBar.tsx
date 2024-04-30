import { TNavItem, navItem } from "@/Data/navItem";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Nav, NavLink } from "../UI/NavItem";

const NavBar = () => {
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
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default NavBar;
