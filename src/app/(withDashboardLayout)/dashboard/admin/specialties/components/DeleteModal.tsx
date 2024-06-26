import HCModal from "@/components/HCModal/HCModal";
import DeleteModalContent from "@/components/Shared/DeleteModalContent";
import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleDelete: any;
};

const DeleteSpecialtyModal = ({ open, setOpen, handleDelete }: TProps) => {
  return (
    <Box>
      <HCModal open={open} setOpen={setOpen} title="Delete The Specialty">
        <DeleteModalContent setOpen={setOpen} handleDelete={handleDelete} />
      </HCModal>
    </Box>
  );
};

export default DeleteSpecialtyModal;
