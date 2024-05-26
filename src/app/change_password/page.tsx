"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import KeyIcon from "@mui/icons-material/Key";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import HCForm from "@/components/Form/HCForm";
import HCInput from "@/components/Form/HCInput";
import { logoutUser } from "@/services/Action/logoutUser";
import { useChangePasswordMutation } from "@/redux/api/Features/authApi";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";

const validationSchema = z.object({
  oldPassword: z.string().min(6, "Must be at least 6 characters long"),
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  const user = getUserInfo();
  console.log(user);

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await changePassword(values);

      if ("data" in res && res.data.status === 200) {
        logoutUser(router);
        toast.success("Password Changed Successfully");
      } else {
        throw new Error("Incorrect Old Password");
      }
    } catch (error) {
      toast.success("Incorrect Old Password");
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
          Change password
        </Typography>
      </Stack>
      <HCForm
        onSubmit={onSubmit}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <HCInput
              name="oldPassword"
              type="password"
              label="Old Password"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <HCInput
              name="newPassword"
              type="password"
              label="New Password"
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Stack direction="row" justifyContent="space-between" gap={3}>
          <Button
            component={Link}
            href={`/dashboard/${user?.role}/profile`}
            sx={{ width: "100%", my: 2 }}
          >
            Go Back
          </Button>
          <Button type="submit" sx={{ width: "100%", my: 2 }}>
            change Password
          </Button>
        </Stack>
      </HCForm>
    </Box>
  );
};

export default ChangePassword;
