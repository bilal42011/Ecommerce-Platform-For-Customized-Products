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
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import FileChooser from "../FileChooser";

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

export default function DeliverOrderModal({ open, handleClose, onDeliver }) {
  const [files, setFiles] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onDeliver && onDeliver(formData);
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
        <CardHeader
          title={"Deliver Completed Work"}
          subheader="Attach a receipt or another proof of delivery"
        />
        <Divider />
        <CardContent component={"form"} onSubmit={onSubmit}>
          <Stack spacing={1}>
            <TextField
              required
              multiline
              rows={4}
              name="message"
              label={"Describe your delivery in detail"}
            />
            <FileChooser
              value={files}
              onChange={(e, newFiles) => setFiles(newFiles)}
              name="files"
            />
            <Button type="submit" fullWidth variant="contained">
              Deliver Work
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Modal>
  );
}
