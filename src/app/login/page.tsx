"use client";

import assets from "@/assets";
import HCForm from "@/components/Form/HCForm";
import HCInput from "@/components/Form/HCInput";
import { userLogin } from "@/services/Action/userLogin";
import { storeUserInfo } from "@/services/auth.service";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export type TLoginData = {
  name: string;
  label: string;
  type: string;
};

export const loginData: TLoginData[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

const LoginPage = () => {
  const router = useRouter();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await userLogin(data);
      if (res.success) {
        storeUserInfo({ accessToken: res.data.accessToken });
        toast.success(res.message);
        router.push("/dashboard");
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          padding: "50px",
          boxShadow: 1,
          borderRadius: "10px",
        }}
      >
        <Stack alignItems="center">
          <Image src={assets.svgs.logo} alt="" width={50} height={50} />
          <Typography variant="h4" component="h4" mt={1} fontWeight={600}>
            Login PH HealthCare
          </Typography>
        </Stack>
        <HCForm
          resolver={zodResolver(loginValidationSchema)}
          defaultValues={loginDefaultValues}
          onSubmit={handleLogin}
          className="mt-6"
        >
          <Grid container spacing={3}>
            {loginData.map((data: TLoginData, i: number) => (
              <Grid item key={i} md={6}>
                <HCInput
                  label={data.label}
                  type={data.type}
                  name={data.name}
                  variant="outlined"
                  size="small"
                />
              </Grid>
            ))}
          </Grid>

          <Typography
            textAlign="end"
            sx={{
              mt: 1,
            }}
          >
            <Link href="/register">Forgot Password?</Link>
          </Typography>

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
            }}
          >
            Login
          </Button>

          <Typography
            sx={{
              textAlign: "center",
              mt: 1,
            }}
          >
            Don&apost have an account?{" "}
            <Link href="/register" className="text-[#1586FD] font-medium">
              Create an account
            </Link>
          </Typography>
        </HCForm>
      </Container>
    </Stack>
  );
};

export default LoginPage;
