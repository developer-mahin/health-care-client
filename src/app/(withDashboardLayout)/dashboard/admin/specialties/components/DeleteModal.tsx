import HCModal from "@/components/HCModal/HCModal";
import { Box, Button, Stack } from "@mui/material";
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Button
            onClick={() => handleDelete()}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            color="success"
          >
            Cancel
          </Button>
        </Stack>
      </HCModal>
    </Box>
  );
};

export default DeleteSpecialtyModal;
