import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import WriteReviewModal from "./WriteReviewModal";

export default function Reviews({ rating }) {
  const [modalOpen, setModalOpen] = useState(false);
  if (!rating) {
    return (
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardHeader sx={{ textAlign: "center" }} title="Reviews" />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography color={"GrayText"} variant="h5">
            {" "}
            No Reviews Yet
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardHeader sx={{ textAlign: "center" }} title="Reviews" />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h4">{rating.average.toFixed(1)}</Typography>
        <Rating value={rating.average} precision={0.5} readOnly />
        <Typography>Based on {rating.count} reviews</Typography>

        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={(_) => setModalOpen(true)}
        >
          Write a Review
        </Button>
      </CardContent>
      <Divider />
      <Stack className="reviews-list" spacing={1}>
        {rating.reviews.map((review, index) => {
          return (
            <Card variant="elevation" key={index}>
              <CardHeader
                title={
                  <Typography fontWeight="bold">
                    {review.user.fullname}
                  </Typography>
                }
                avatar={<Avatar>{review.user.fullname.charAt(0)}</Avatar>}
                subheader={
                  <Stack direction="row" alignItems={"center"}>
                    <Rating
                      value={review.rating}
                      sx={{ mr: 1 }}
                      precision={0.5}
                      readOnly
                    />{" "}
                    ({review.rating.toFixed(1)})
                  </Stack>
                }
              />
              <CardContent>
                <Typography>{review.description}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
      <WriteReviewModal
        open={modalOpen}
        handleClose={(_) => setModalOpen(false)}
      />
    </Card>
  );
}
