import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { Box } from "@mui/material";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardDrawer>{children}</DashboardDrawer>
    </>
  );
};

export default DashboardLayout;
