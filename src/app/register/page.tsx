"use client";

import assets from "@/assets";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import HCForm from "@/components/Form/HCForm";
import HCInput from "@/components/Form/HCInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { convertToFormData } from "@/utils/convertToFormData";
import { registerPatient } from "@/services/Action/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/Action/userLogin";
import { storeUserInfo } from "@/services/auth.service";

type TRegister = {
  column: number;
  name: string;
  label: string;
  type: string;
};

const registerData: TRegister[] = [
  {
    column: 12,
    name: "patient.name",
    label: "Name",
    type: "text",
  },
  {
    column: 6,
    name: "patient.email",
    label: "Email",
    type: "email",
  },
  {
    column: 6,
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    column: 6,
    name: "patient.contactNumber",
    label: "Contact Number",
    type: "text",
  },
  {
    column: 6,
    name: "patient.address",
    label: "Address",
    type: "text",
  },
];

const RegisterPages = () => {
  const router = useRouter();

  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    const convertedData = convertToFormData(data);
    try {
      const res = await registerPatient(convertedData);
      if (res.success) {
        const result = await userLogin({
          email: data.patient.email,
          password: data.password,
        });
        if (result.success) {
          storeUserInfo({ accessToken: result.data.accessToken });
          toast.success("Account Created And Logged In Successfully");
          router.push("/");
        }
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
            Patient Register
          </Typography>
        </Stack>
        <HCForm onSubmit={handleRegister} className="mt-6">
          <Grid container spacing={3}>
            {registerData.map((data: TRegister, i: number) => (
              <Grid item key={i} md={data.column}>
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
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
            }}
          >
            Register
          </Button>
          <Typography
            sx={{
              textAlign: "center",
              mt: 1,
            }}
          >
            Do you already have an account?{" "}
            <Link href="/login" className="text-[#1586FD] font-medium">
              Login
            </Link>
          </Typography>
        </HCForm>
      </Container>
    </Stack>
  );
};

export default RegisterPages;
