import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
  const loginUser = isLoggedIn();
  const router = useRouter();

  const handleLogOut = () => {
    removeUserInfo();
    toast.success("log out successful");
    router.refresh();
  };
  return (
    <>
      {loginUser ? (
        <Button color="error" onClick={() => handleLogOut()}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
