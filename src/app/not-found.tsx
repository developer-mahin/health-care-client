import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div>
        <Typography
          variant="h1"
          sx={{ fontSize: "4rem", marginBottom: "1rem", color: "#333" }}
        >
          Oops!
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#555" }}
        >
          The page you{"'"}re looking for does not exist.
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary" size="large">
            Go back to the homepage
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
