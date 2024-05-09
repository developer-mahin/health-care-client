import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogContent, DialogTitle, SxProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { BootstrapDialog } from "./HCModal";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  sx?: SxProps;
  title: string;
};

const HCFullScreenModal = ({ open, setOpen, children, title, sx }: TProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ ...sx }}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>{children}</DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default HCFullScreenModal;
