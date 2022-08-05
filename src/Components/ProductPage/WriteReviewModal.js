import { Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const closeButtonStyles = {
  position: "absolute",
  top: "0",
  right: "0",
};

export default function WriteReviewModal({ open, handleClose, onSubmit }) {
  const handleReviewSubmit = (e) => {
    e.preventDefault();
  };

  const [review, setReview] = useState({
    rating: 1,
    description: "",
  });

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
          title="Write a review"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        ></CardHeader>
        <Divider />
        <CardContent>
          <Stack
            id="modal-modal-description"
            spacing={1}
            component={"form"}
            onSubmit={handleReviewSubmit}
          >
            <FormControl>
              <FormLabel>How would you rate your experience</FormLabel>
              <Rating
                value={review.rating}
                onChange={(e, value) => {
                  if (value > 0) {
                    setReview((oldReview) => {
                      return { ...oldReview, rating: value };
                    });
                  }
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ mb: 1 }}>Leave a comment</FormLabel>
              <TextField
                required
                multiline
                rows={4}
                label="Tell us what you think ..."
                value={review.description}
                onChange={(e) => (oldReview) =>
                  setReview({ ...oldReview, description: e.target.value })}
              />
            </FormControl>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Modal>
  );
}
