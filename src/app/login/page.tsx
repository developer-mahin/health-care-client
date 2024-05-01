import assets from "@/assets";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type TLoginData = {
  name: string;
  label: string;
  type: string;
};

const loginData: TLoginData[] = [
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
        <form className="mt-6">
          <Grid container spacing={3}>
            {loginData.map((data: TLoginData, i: number) => (
              <Grid item key={i} md={6}>
                <TextField
                  label={data.label}
                  type={data.type}
                  name={data.name}
                  variant="outlined"
                  fullWidth
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
        </form>
      </Container>
    </Stack>
  );
};

export default LoginPage;
