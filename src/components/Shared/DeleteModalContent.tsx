import { Button, Stack } from "@mui/material";

type TProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: any;
};

const DeleteModalContent = ({ setOpen, handleDelete }: TProps) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={2}>
      <Button onClick={() => handleDelete()} variant="outlined" color="error">
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
  );
};

export default DeleteModalContent;
