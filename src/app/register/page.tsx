import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

type TRegister = {
  column: number;
  name: string;
  label: string;
  type: string;
};

const registerData: TRegister[] = [
  {
    column: 12,
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    column: 6,
    name: "email",
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
    name: "contactNumber",
    label: "Contact Number",
    type: "text",
  },
  {
    column: 6,
    name: "address",
    label: "Address",
    type: "text",
  },
];

const RegisterPages = () => {
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
        <form className="mt-6">
          <Grid container spacing={3}>
            {registerData.map((data: TRegister, i: number) => (
              <Grid item key={i} md={data.column}>
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
              mt:1,
            }}

          >
            Do you already have an account?{" "}
            <Link href="/login" className="text-[#1586FD] font-medium">
              Login
            </Link>
          </Typography>
        </form>
      </Container>
    </Stack>
  );
};

export default RegisterPages;
