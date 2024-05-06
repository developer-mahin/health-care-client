import assets from "@/assets";
import { TUserRole } from "@/types";
import { sidebarItems } from "@/utils/sidebarItems";
import { Box, Divider, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  console.log(userRole)

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
        py={2}
        px={1}
        mt={1}
      >
        <Image src={assets.svgs.logo} alt="" width={40} height={40} />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
          fontWeight={600}
        >
          PH Health Care
        </Typography>
      </Stack>
      <Divider />
      <List>
        {sidebarItems(userRole as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} index={index} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
