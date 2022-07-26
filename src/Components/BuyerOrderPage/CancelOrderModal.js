import { Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Modal,
  Stack,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
};

const closeButtonStyles = {
  position: "absolute",
  top: "0",
  right: "0",
};

export default function CancelOrderModal({
  open,
  handleClose,
  onCancel,
  order,
}) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onCancel && onCancel({ message: formData.get("message") });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <IconButton sx={closeButtonStyles} onClick={handleClose}>
          <Close />
        </IconButton>
        <CardHeader title={"Provide details to cancel the order"} />
        <Divider />
        <CardContent component={"form"} onSubmit={onSubmit}>
          <Stack spacing={1}>
            <TextField
              required
              multiline
              rows={4}
              name="message"
              label={"Describe the reason for cancelling the order"}
            />
            <Button type="submit" fullWidth variant="contained" color="error">
              Cancel Order
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Modal>
  );
}
