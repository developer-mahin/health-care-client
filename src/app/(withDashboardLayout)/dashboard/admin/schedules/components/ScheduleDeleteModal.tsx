import HCModal from "@/components/HCModal/HCModal";
import DeleteModalContent from "@/components/Shared/DeleteModalContent";
import { Box } from "@mui/material";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: any;
};

const ScheduleDeleteModal = ({ handleDelete, open, setOpen }: TProps) => {
  return (
    <Box>
      <HCModal open={open} setOpen={setOpen} title="Delete The Doctor">
        <DeleteModalContent setOpen={setOpen} handleDelete={handleDelete} />
      </HCModal>
    </Box>
  );
};

export default ScheduleDeleteModal;
