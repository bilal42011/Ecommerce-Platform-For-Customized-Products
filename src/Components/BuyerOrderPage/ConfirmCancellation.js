import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import OverlaySpinner from "../OverlaySpinner";

export default function ConfirmCancellation({ order, onConfirm }) {
  const [open, setOpen] = useState(false);
  const [formBusy, setFormBusy] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = async () => {
    setFormBusy(true);
    onConfirm && (await onConfirm());
    setFormBusy(false);
    handleClose();
  };

  return (
    <Stack spacing={2} textAlign="left" position={"relative"}>
      <Typography variant="h6" fontWeight={"bold"}>
        Order Cancellation Requested
      </Typography>
      <Typography>{order.message}</Typography>

      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Confirm Cancel
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to cancel this order?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      {formBusy && <OverlaySpinner />}
    </Stack>
  );
}
