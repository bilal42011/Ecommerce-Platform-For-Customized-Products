import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

export default function Reviews({ rating }) {
  if (!rating) {
    return (
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardHeader sx={{ textAlign: "center" }} title="Reviews" />

        <CardContent sx={{ textAlign: "center" }}>No Reviews Yet</CardContent>
      </Card>
    );
  }
  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardHeader sx={{ textAlign: "center" }} title="Reviews" />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h4">{rating.averageRating}</Typography>
        <Rating value={rating.averageRating} readOnly />
        <Typography>based on {rating.reviews.length} reviews</Typography>
      </CardContent>
      <Divider />
      <Stack className="reviews-list" spacing={1}>
        {rating.reviews.map((item, index) => {
          return (
            <Card variant="elevation">
              <CardHeader
                title={<strong>{item.user.fullName}</strong>}
                avatar={<Avatar>{item.user.fullName.charAt(0)}</Avatar>}
                subheader={
                  <Stack direction="row" alignItems={"center"}>
                    <Rating value={item.rating} sx={{ mr: 1 }} /> (4.0)
                  </Stack>
                }
              />
              <CardContent>
                <Typography>{item.reviewDescription}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Card>
  );
}
